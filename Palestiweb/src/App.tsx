import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { CardItem } from "@/components/CardItem"
import { ShareDialog } from "@/components/ShareDialog"
import MyChart from "@/components/victory"
import { useTheme } from "@/components/theme-provider"
import React from "react"
import VictimsByAgeChart from "@/components/VictimsByAgeChart"
import InfrastructureChart from "@/components/InfrastructureChart"
import CarouselDApiDemo from "@/components/Carousel"
import Footer from "@/components/footer"

import palestinaWar from "@/assets/img/palestinawar.webp"
import kidPalestina from "@/assets/img/kidpalestina.jpg"
import mani from "@/assets/img/mani.jpg"

export default function App() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [showCharts, setShowCharts] = React.useState(false)

  return (
    <div className={`min-h-screen flex flex-col gap-8 transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      <main className="relative w-full h-full">
        <Hero isDark={isDark} />
        {!showCharts && (
          <div className="max-w-4xl mx-auto mt-12 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Palestina enfrenta una crisis humanitaria sin precedentes
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Cada día, familias enteras viven bajo asedio, hospitales colapsan y los niños pierden su infancia. 
              Conocer la magnitud del sufrimiento y escuchar las historias de quienes lo viven es el primer paso 
              para tomar acción y generar un cambio real.
            </p>
          </div>
        )}
        {!showCharts && (
          <div className="flex w-full max-w-6xl flex-row justify-center gap-6 flex-wrap mx-auto mt-20">
            <CardItem
              title="Una crisis humanitaria sin precedentes"
              description="Miles de vidas civiles están en riesgo. Familias enteras viven bajo el asedio, sin acceso seguro a agua, electricidad o atención médica. Los hospitales colapsan, los alimentos escasean y las comunicaciones son bloqueadas. Lo que ocurre en Palestina no es un conflicto lejano: es una violación continua de los derechos humanos y un recordatorio urgente de que la humanidad no puede permanecer en silencio ante el sufrimiento de un pueblo que solo busca vivir en paz."
              imgSrc={palestinaWar}
              isDark={isDark}
              actionText="Ver cifras reales"
              onClick={() => setShowCharts(true)} 
            />
            <CardItem
              title="Historias que el mundo no debería ignorar"
              description="Detrás de cada cifra hay un rostro, un nombre, un sueño roto. Niños que ya no pueden ir a la escuela, madres que buscan a sus hijos entre los escombros, ancianos que resisten con la esperanza de ver un nuevo amanecer. Sus testimonios son un grito de dignidad y resistencia, una llamada a recordar que la empatía es el primer paso hacia la justicia. Cada historia merece ser contada, compartida y recordada."
              imgSrc={kidPalestina}
              isDark={isDark}
              actionText="Leer testimonios"
            />
            <CardItem
              title="Tu voz realmente puede marcar la diferencia"
              description="Informarte, compartir, donar o exigir a tus representantes que actúen. Cada gesto cuenta. No es necesario estar en Palestina para ayudar: la solidaridad no conoce fronteras. Levantar la voz, visibilizar la verdad y apoyar a las organizaciones que trabajan sobre el terreno puede salvar vidas. La indiferencia también mata — el silencio no puede ser una opción cuando la humanidad está en juego."
              imgSrc={mani}
              isDark={isDark}
            >
              <ShareDialog isDark={isDark} />
            </CardItem>
          </div>
        )}
        {showCharts && (
          <section className="max-w-5xl mx-auto mt-16 px-4 flex flex-col items-center gap-10 animate-fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold text-center">Cifras reales del impacto humanitario</h2>
            <p className="text-lg md:text-xl text-center max-w-3xl">
              Estas visualizaciones reflejan el alcance devastador del conflicto en Palestina: las víctimas civiles, la destrucción de infraestructura esencial y la creciente crisis humanitaria.
              Cada número representa vidas, hogares y comunidades enteras que enfrentan un futuro incierto.
            </p>

            <div className="w-full max-w-4xl">
              <MyChart />
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-muted rounded-2xl p-4">
              <VictimsByAgeChart key={isDark ? "dark" : "light"} isDark={isDark} />
            </div>
            <div className="bg-muted rounded-2xl p-4">
              <InfrastructureChart key={isDark ? "dark" : "light"} isDark={isDark} />
            </div>
          </div>

            {/* Botón para volver */}
            <button
              onClick={() => setShowCharts(false)}
              className={`mt-10 px-6 py-3 rounded-xl transition-all ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              ← Volver
            </button>
          </section>
        )}
        <div className="h-20"></div>
        <CarouselDApiDemo autoPlayDelay={4000}>
        </CarouselDApiDemo>
        <Footer></Footer>
      </main>
    </div>
  )
}
