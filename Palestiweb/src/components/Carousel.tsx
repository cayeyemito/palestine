"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import image1 from "@/assets/img/death.png"
import image2 from "@/assets/img/death2.jpg"
import image3 from "@/assets/img/death3.jpg"
import image4 from "@/assets/img/death4.jpg"
import image5 from "@/assets/img/death5.jpg"

interface Slide {
  title: string
  text: string
  image: string
}

interface Props {
  autoPlayDelay?: number // delay en ms para autoplay, opcional
}

export default function CarouselDApiDemo({ autoPlayDelay }: Props) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const autoplayRef = React.useRef<NodeJS.Timeout | null>(null)

  // Array con la info de cada slide
  const content: Slide[] = [
    {
      title: "Muerte y desolación",
      text: "No importa a donde mires, cadaveres y familias destruidas por nada más que el odio de unos pocos.",
      image: image1,
    },
    {
      title: "Llamas que jamas se podran apagar",
      text: "Explosiones y fuego que no solo se llevan por delante edificios y vegetación, si no tambien los sueños y esperanzas de millones de inocentes.",
      image: image2,
    },
    {
      title: "Vidas interrumpidas",
      text: "Niños, jóvenes y adultos ven cómo su futuro se desvanece entre ruinas y miedo constante, mientras intentan sobrevivir día a día.",
      image: image3,
    },
    {
      title: "Hogares destruidos",
      text: "Calles vacías, viviendas derrumbadas y familias desplazadas; la seguridad y la paz se han convertido en un recuerdo lejano.",
      image: image4,
    },
    {
      title: "Esperanza en medio del caos",
      text: "A pesar de la devastación, muchas personas luchan por mantenerse unidas y proteger lo que queda de sus comunidades y vidas.",
      image: image5,
    },
  ]

  // Actualizamos count y current al seleccionar slide
  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Función para iniciar/reiniciar autoplay
  const startAutoplay = () => {
    if (!api || !autoPlayDelay) return
    if (autoplayRef.current) clearInterval(autoplayRef.current)

    autoplayRef.current = setInterval(() => {
      if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
        api.scrollTo(0)
      } else {
        api.scrollNext()
      }
    }, autoPlayDelay)
  }

  // Lanza autoplay al montar y cuando cambien api o autoPlayDelay
  React.useEffect(() => {
    startAutoplay()
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [api, autoPlayDelay])

  // Funciones para avanzar/retroceder manualmente y reiniciar autoplay
  const handleNext = () => {
    api?.scrollNext()
    startAutoplay()
  }
  const handlePrev = () => {
    api?.scrollPrev()
    startAutoplay()
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {content.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="w-full max-w-2xl h-96">
                <CardContent className="flex flex-col md:flex-row items-center justify-center p-6 gap-6">
                  {/* Imagen */}
                  <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Texto */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-2">{slide.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{slide.text}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Flechas con reinicio de autoplay */}
        <CarouselPrevious onClick={handlePrev} />
        <CarouselNext onClick={handleNext} />
      </Carousel>

      <div className="text-muted-foreground py-2 text-center text-sm">
        Imagen {current} de {count}
      </div>
    </div>
  )
}
