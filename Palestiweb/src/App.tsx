import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Button } from "@/components/ui/button"
import flagImg from "@/assets/img/flag.png"
import palestinaWar from "@/assets/img/palestinawar.webp"
import kidPalestina from "@/assets/img/kidpalestina.jpg"
import mani from "@/assets/img/mani.jpg"
import { Facebook, Twitter, Instagram } from "lucide-react"
import MyChart from "@/components/victory";
import Page from "@/components/bbdd"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

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
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    // Inicializa el switch según el tema actual
    setIsDark(theme === "dark")
  }, [theme])

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
      <main className="relative w-full h-full">
        <div className="relative w-full h-[60vh] mt-[6.8vh]">
          <img
            className="w-full h-full object-cover"
            src={flagImg}
            alt="Flag"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-5 z-20">
            <h1
              className={`font-display font-bold transition-colors duration-300
              text-2xl sm:text-3xl md:text-5xl lg:text-8xl
              ${isDark 
                ? "text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" 
                : "text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"} 
                fade-in-up`}
            >
              La indiferencia también mata.
            </h1>
          </div>
        </div>
        <div className="flex w-full max-w-6xl flex-row justify-center gap-6 flex-wrap mx-auto mt-20">
          <Item
            variant="outline"
            className="flex flex-col items-start justify-start h-auto min-h-fit p-6 w-90"
          >
            <ItemContent className="flex flex-col gap-2 text-left">
              <ItemTitle className="w-full text-center text-lg">Una crisis humanitaria sin precedentes</ItemTitle>
              <img
                src={palestinaWar}
                alt="Familias palestinas bajo el asedio"
                className="aspect-square w-full rounded-sm object-cover rounded-md border border-border"
              />
              <ItemDescription className="line-clamp-none leading-relaxed">
                Miles de vidas civiles están en riesgo. Familias enteras viven bajo el asedio, sin acceso seguro a agua, electricidad o atención médica. Lo que ocurre en Palestina no es un conflicto lejano: es una violación continua de los derechos humanos.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="w-full flex justify-center">
              <Button size="sm" className={isDark 
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-black"
                }
              >
                Ver cifras reales
              </Button>
            </ItemActions>
          </Item>

          <Item
            variant="outline"
            className="flex flex-col items-start justify-start h-auto min-h-fit p-6 w-90"
          >
            <ItemContent className="flex flex-col gap-2 text-left">
              <ItemTitle className="w-full text-center text-lg">Historias que el mundo no debería ignorar</ItemTitle>
              <img
                src={kidPalestina}
                alt="Familias palestinas bajo el asedio"
                className="aspect-square w-full rounded-sm object-cover rounded-md border border-border"
              />
              <ItemDescription className="line-clamp-none leading-relaxed">Niños, madres y ancianos resisten día a día en medio de la devastación. Sus testimonios nos recuerdan que detrás de cada número hay una vida, una historia, un sueño roto que merece ser contado.</ItemDescription>
            </ItemContent>
            <ItemActions className="w-full flex justify-center">
              <Button size="sm" className={isDark 
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-black"
                }
              >
                Leer testimonios
              </Button>
            </ItemActions>
          </Item>

          <Item
            variant="outline"
            className="flex flex-col items-start justify-start h-auto min-h-fit p-6 w-90"
          >
            <ItemContent className="flex flex-col gap-2 text-left">
              <ItemTitle className="w-full text-center text-lg">Tu voz realmente puede marcar la diferencia</ItemTitle>
              <img
                src={mani}
                alt="Familias palestinas bajo el asedio"
                className="aspect-square w-full rounded-sm object-cover rounded-md border border-border"
              />
              <ItemDescription className="line-clamp-none leading-relaxed">Informarte, compartir, donar o exigir a tus representantes que se pronuncien. Cada gesto cuenta. La indiferencia también mata — el silencio no puede ser una opción.</ItemDescription>
            </ItemContent>
            <ItemActions className="w-full flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className={isDark
                      ? "bg-white text-black border-white"
                      : "bg-black text-white border-black"
                    }
                  >
                    Cómo ayudar
                  </Button>
                </DialogTrigger>

                <DialogContent
                  className={`sm:max-w-md p-6 rounded-md ${
                    isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"
                  }`}
                >
                  <DialogHeader>
                    <DialogTitle>Compartenos</DialogTitle>
                    <DialogDescription>
                      Cualquier persona que vea esto y se solidarize con la cuasa es bienvenida
                    </DialogDescription>
                  </DialogHeader> 
                  <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://palestine-v2gt.vercel.app/"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 gap-3">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        className={`${isDark ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-200"} p-2`}
                        onClick={() =>
                          window.open(`https://www.facebook.com/sharer/sharer.php?u=https://palestine-v2gt.vercel.app/`, "_blank")
                        }
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>

                      <Button
                        size="sm"
                        variant="ghost"
                        className={`${isDark ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-200"} p-2`}
                        onClick={() =>
                          window.open(`https://twitter.com/intent/tweet?url=https://palestine-v2gt.vercel.app/&text=Apoya la causa de Palestina`, "_blank")
                        }
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>

                      <Button
                        size="sm"
                        variant="ghost"
                        className={`${isDark ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-200"} p-2`}
                        onClick={() => {
                          navigator.clipboard.writeText("https://palestine-v2gt.vercel.app/");
                          alert("Enlace copiado, ya puedes compartirlo en Instagram!");
                        }}
                        title="Copiar enlace para Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </div>

                    <DialogClose asChild>
                      <Button
                        size="sm"
                        className={`${
                          isDark
                            ? "bg-black text-white border-gray-900/90 hover:bg-gray-800 hover:border-gray-800 focus:shadow-none"
                            : "bg-white text-black border-gray-200 hover:bg-gray-100 hover:border-gray-300 focus:shadow-none"
                        }`}
                      >
                        Cerrar
                      </Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </ItemActions>
          </Item>
        </div>
        <div className="mt-10 max-w-4xl mx-auto">
          <MyChart/>
          <h1></h1>
        </div>
        <div className="mt-10 max-w-4xl mx-auto">
          <Page/>
        </div>
      </main>
    </div>
  )
}
