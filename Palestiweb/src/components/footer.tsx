"use client"

import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-gray-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Sección izquierda */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Sobre nosotros</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Un espacio dedicado a crear conciencia a través del arte y la tecnología.  
            Buscamos inspirar empatía, reflexión y esperanza en medio del caos.
          </p>
        </div>

        {/* Sección central */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-3 text-white">Enlaces útiles</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
            <li><a href="#proyecto" className="hover:text-white transition-colors">Proyecto</a></li>
            <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Sección derecha */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-xl font-semibold mb-3 text-white">Síguenos</h2>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="mailto:contacto@example.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-sm text-gray-500">contacto@example.com</p>
        </div>

      </div>

      <Separator className="my-8 bg-gray-700" />

      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Proyecto Humanidad. Todos los derechos reservados.
      </div>
    </footer>
  )
}
