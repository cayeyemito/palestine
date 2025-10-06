import * as React from "react"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { CardItem } from "@/components/CardItem"
import { ShareDialog } from "@/components/ShareDialog"
import MyChart from "@/components/victory"
import palestinaWar from "@/assets/img/palestinawar.webp"
import kidPalestina from "@/assets/img/kidpalestina.jpg"
import mani from "@/assets/img/mani.jpg"

export default function App() {
  const [isDark] = React.useState(false)

  return (
    <div className="min-h-screen flex flex-col gap-8 bg-background text-foreground transition-colors">
      <Header />
      <main className="relative w-full h-full">
        <Hero isDark={isDark} />
        <div className="flex w-full max-w-6xl flex-row justify-center gap-6 flex-wrap mx-auto mt-20">
          <CardItem title="Una crisis humanitaria sin precedentes" description="Miles de vidas civiles están en riesgo. Familias enteras viven bajo el asedio, sin acceso seguro a agua, electricidad o atención médica. Lo que ocurre en Palestina no es un conflicto lejano: es una violación continua de los derechos humanos." imgSrc={palestinaWar} isDark={isDark} actionText="Ver cifras reales" />
          <CardItem title="Historias que el mundo no debería ignorar" description="Niños, madres y ancianos resisten día a día en medio de la devastación. Sus testimonios nos recuerdan que detrás de cada número hay una vida, una historia, un sueño roto que merece ser contado." imgSrc={kidPalestina} isDark={isDark} actionText="Leer testimonios" />
          <CardItem title="Tu voz realmente puede marcar la diferencia" description="Informarte, compartir, donar o exigir a tus representantes que se pronuncien. Cada gesto cuenta. La indiferencia también mata — el silencio no puede ser una opción." imgSrc={mani} isDark={isDark}>
            <ShareDialog isDark={isDark} />
          </CardItem>
        </div>
        <div className="mt-10 max-w-4xl mx-auto"><MyChart /></div>
      </main>
    </div>
  )
}
