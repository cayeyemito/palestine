import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { registerUser, loginUser } from "@/components/bbdd"
import toast from "react-hot-toast" // Opcional: para mostrar notificaciones bonitas

interface AuthDialogProps {
  type: "login" | "register"
  isDark: boolean
}

export function AuthDialog({ type, isDark }: AuthDialogProps) {
  const title = type === "login" ? "Iniciar sesión" : "Registrarse"
  const description = type === "login"
    ? "Introduce tus credenciales para acceder a tu cuenta"
    : "Crea una cuenta nueva para unirte"

  // Estados de inputs
  const [nombre, setNombre] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [nacimiento, setNacimiento] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Estado del Dialog
  const [open, setOpen] = useState(false)

  // Función para registrar usuario
  const handleRegister = async () => {
    setLoading(true)
    const result = await registerUser({ email, password, nombre, apellidos, nacimiento })
    setLoading(false)

    if (result.success) {
      toast.success("¡Usuario registrado correctamente!")
      setOpen(false)
      // Limpiar inputs
      setNombre(""); setApellidos(""); setNacimiento(""); setEmail(""); setPassword("")
    } else {
      toast.error(`Error: ${result.error}`)
    }
  }

  // Función para login
  const handleLogin = async () => {
    setLoading(true);
    const result = await loginUser(email, password);
    setLoading(false);

    if (result.success) {
        alert("¡Sesión iniciada correctamente!");
        setOpen(false);
    } else {
        alert(result.error ?? "El correo o la contraseña son incorrectos");
    }
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className={isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}>
          {title}
        </Button>
      </DialogTrigger>

      <DialogContent className={`sm:max-w-md p-6 rounded-md ${isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          {type === "register" && (
            <>
              <div className="flex flex-col gap-1">
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="apellidos">Apellidos</Label>
                <Input id="apellidos" placeholder="Tus apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="nacimiento">Fecha de nacimiento</Label>
                <Input id="nacimiento" type="date" value={nacimiento} onChange={(e) => setNacimiento(e.target.value)} />
              </div>
            </>
          )}

          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" placeholder="correo@ejemplo.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <Button
            size="sm"
            className={isDark ? "bg-black text-white" : "bg-white text-black"}
            onClick={type === "login" ? handleLogin : handleRegister}
            disabled={loading}
          >
            {loading ? (type === "login" ? "Accediendo..." : "Registrando...") : (type === "login" ? "Acceder" : "Crear cuenta")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
