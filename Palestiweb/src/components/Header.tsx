import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { AuthDialog } from "./AuthDialog"
import { supabase } from "../../utils/supabase"
import { Button } from "@/components/ui/button"
 
function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)
  const [user, setUser] = useState<{ email: string } | null>(null)

  useEffect(() => {
  setIsDark(theme === "dark")

  // Obtener la sesión inicial
  const getUser = async () => {
    const { data } = await supabase.auth.getSession()
    if (data.session?.user?.email) {
      setUser({ email: data.session.user.email })
    } else {
      setUser(null)
    }
  }
  getUser()

  // Suscripción a cambios de auth
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    if (session?.user?.email) {
      setUser({ email: session.user.email })
    } else {
      setUser(null)
    }
  })

  // Limpiar la suscripción al desmontar
  return () => {
    subscription.unsubscribe()
  }
}, [theme])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-700
                       bg-background/70 backdrop-blur-md transition-all duration-300
                       hover:bg-background/100 hover:backdrop-blur-0 flex items-center justify-between p-4">

      {/* Botones a la izquierda */}
      <div className="flex gap-2">
        {user ? (
          <>
            <span className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800">{user.email}</span>
            <Button size="sm" className="bg-red-500 text-white" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </>
        ) : (
          <>
            <AuthDialog type="login" isDark={isDark} />
            <AuthDialog type="register" isDark={isDark} />
          </>
        )}
      </div>

      {/* Switch de tema a la derecha */}
      <div className="flex items-center gap-2">
        <Sun className="h-5 w-5" />
        <Switch
          checked={isDark}
          onCheckedChange={(checked) => {
            setIsDark(checked)
            setTheme(checked ? "dark" : "light")
          }}
        />
        <Moon className="h-5 w-5" />
      </div>
    </header>
  )
}
