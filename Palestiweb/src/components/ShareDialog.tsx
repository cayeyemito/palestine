import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from "lucide-react"

interface ShareDialogProps {
  isDark: boolean
}

export function ShareDialog({ isDark }: ShareDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className={isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}>
          Cómo ayudar
        </Button>
      </DialogTrigger>

      <DialogContent className={`sm:max-w-md p-6 rounded-md ${isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}`}>
        <DialogHeader>
          <DialogTitle>Compartenos</DialogTitle>
          <DialogDescription>
            Cualquier persona que vea esto y se solidarize con la cuasa es bienvenida
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">Link</Label>
            <Input id="link" defaultValue="https://palestine-v2gt.vercel.app/" readOnly />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 gap-3">
          <div className="flex gap-3">
            <Button size="sm" variant="ghost" className={`${isDark ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-200"} p-2`} onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=https://palestine-v2gt.vercel.app/`, "_blank")}><Facebook className="w-4 h-4" /></Button>
            <Button size="sm" variant="ghost" className={`${isDark ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-200"} p-2`} onClick={() => window.open(`https://twitter.com/intent/tweet?url=https://palestine-v2gt.vercel.app/&text=Apoya la causa de Palestina`, "_blank")}><Twitter className="w-4 h-4" /></Button>
            <Button size="sm" variant="ghost" className={`${isDark ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-200"} p-2`} onClick={() => { navigator.clipboard.writeText("https://palestine-v2gt.vercel.app/"); alert("Enlace copiado, ya puedes compartirlo en Instagram!"); }} title="Copiar enlace para Instagram"><Instagram className="w-4 h-4" /></Button>
          </div>
          <DialogClose asChild>
            <Button size="sm" className={`${isDark ? "bg-black text-white border-gray-900/90 hover:bg-gray-800 hover:border-gray-800 focus:shadow-none" : "bg-white text-black border-gray-200 hover:bg-gray-100 hover:border-gray-300 focus:shadow-none"}`}>Cerrar</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
