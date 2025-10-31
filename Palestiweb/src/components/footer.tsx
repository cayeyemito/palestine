"use client"

import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-gray-200 py-10">
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
            <li><a href="https://elpais.com/internacional/2025-10-26/ultima-hora-del-conflicto-en-oriente-proximo-en-directo.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Última hora del conflicto en Oriente Próximo</a></li>
            <li><a href="https://es.wikipedia.org/wiki/Conflicto_israel%C3%AD-palestino" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Historia del conflicto israelí-palestino</a></li>
            <li><a href="https://www.hrw.org/es/world-report/2025/country-chapters/israel-and-palestine" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Informe de Human Rights Watch 2025</a></li>
            <li><a href="https://es.wikipedia.org/wiki/Plan_de_paz_para_Gaza_de_2025" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Plan de paz para Gaza de 2025</a></li>
          </ul>
        </div>

        {/* Nueva sección derecha */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-3 text-white">Apoyo y solidaridad</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="https://www.unrwa.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">UNRWA - Agencia de la ONU para los refugiados palestinos</a></li>
            <li><a href="https://www.icrc.org/es/where-we-work/middle-east/palestine" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cruz Roja en Palestina</a></li>
            <li><a href="https://www.amnesty.org/es/countries/middle-east-and-north-africa/occupied-palestinian-territories/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Amnistía Internacional - Territorios Palestinos Ocupados</a></li>
            <li><a href="https://www.msf.org/es/palestina" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Médicos Sin Fronteras - Palestina</a></li>
          </ul>
        </div>

      </div>

      <Separator className="my-8 bg-gray-700" />

      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Proyecto Humanidad. Todos los derechos reservados.
      </div>
    </footer>
  )
}
