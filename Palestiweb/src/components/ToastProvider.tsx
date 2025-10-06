// components/ToastProvider.tsx
import * as React from "react"
import * as Toast from "@radix-ui/react-toast"
import { cn } from "@/lib/utils"

interface ToastContextType {
  showToast: (msg: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState("")

  const showToast = (msg: string) => {
    setMessage(msg)
    setOpen(false)
    setTimeout(() => setOpen(true), 50)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast.Provider swipeDirection="right">
        {children}
        <Toast.Root
          className={cn(
            "bg-black text-white px-4 py-3 rounded shadow-lg fixed top-4 right-4 z-50"
          )}
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Description>{message}</Toast.Description>
        </Toast.Root>
      </Toast.Provider>
    </ToastContext.Provider>
  )
}

// Hook para usar desde cualquier componente
export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) throw new Error("useToast must be used within ToastProvider")
  return context
}
