import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
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
export { Switch }

export default function App() {
  const { setTheme } = useTheme()
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    )
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )
  const [isDark, setIsDark] = React.useState(false) // estado del switch

  return (
    <div className="min-h-screen flex flex-col gap-8 bg-background text-foreground transition-colors">
      <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-700
                        bg-background/70 backdrop-blur-md transition-all duration-300
                        hover:bg-background/100 hover:backdrop-blur-0 flex items-center justify-end p-4 gap-2">
        <Sun className="h-5 w-5" />
        <Switch
          checked={isDark}
          onCheckedChange={(checked) => {
            setIsDark(checked)
            setTheme(checked ? "dark" : "light")
          }}
        />
        <Moon className="h-5 w-5" />
      </header>

      {/* Espacio debajo del header */}
      <div className="h-16" />

      <main className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-1/2">
          <img className="w-full h-full object-cover" src="/src/img/flag.jpg" alt="" />
        </div>
        {/*<div className="flex flex-col gap-8 w-full max-w-xs mx-auto">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={setDate}
            captionLayout={dropdown}
            className={cn(
              "rounded-lg border p-4 w-full",
              isDark
                ? "shadow-[0_4px_6px_rgba(255,0,0,0.5)]"
                : "shadow-[0_4px_6px_rgba(59,130,246,0.2)]"
            )}
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto">
              <Label htmlFor="dropdown" className="px-1 text-center">
                Dropdown
              </Label>

              <Select
                value={dropdown}
                onValueChange={(value) =>
                  setDropdown(
                    value as React.ComponentProps<typeof Calendar>["captionLayout"]
                  )
                }
              >
                <SelectTrigger
                  id="dropdown"
                  size="sm"
                  className="bg-background w-full text-center"
                >
                  <SelectValue placeholder="Dropdown" />
                </SelectTrigger>
                <SelectContent align="center">
                  <SelectItem className="text-center" value="dropdown">
                    Month and Year
                  </SelectItem>
                  <SelectItem className="text-center" value="dropdown-months">
                    Month Only
                  </SelectItem>
                  <SelectItem className="text-center" value="dropdown-years">
                    Year Only
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>*/}
      </main>
    </div>
  )
}
