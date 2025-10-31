import { useRef, useState, useEffect } from "react"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { CardItem } from "@/components/CardItem"
import { ShareDialog } from "@/components/ShareDialog"
import MyChart from "@/components/victory"
import { useTheme } from "@/components/theme-provider"
import VictimsByAgeChart from "@/components/VictimsByAgeChart"
import InfrastructureChart from "@/components/InfrastructureChart"
import CarouselDApiDemo from "@/components/Carousel"
import Footer from "@/components/footer"
import { SubscriptionForm } from "@/components/suscription-form"

import palestinaWar from "@/assets/img/palestinawar.webp"
import kidPalestina from "@/assets/img/kidpalestina.jpg"
import mani from "@/assets/img/mani.jpg"
import foto1 from "@/assets/img/foto1.jpg"
import foto2 from "@/assets/img/foto2.jpg"
import foto3 from "@/assets/img/foto3.jpg"
import foto4 from "@/assets/img/foto4.jpg"
import foto5 from "@/assets/img/foto5.jpg"
import foto6 from "@/assets/img/foto6.jpg"
import foto7 from "@/assets/img/foto7.jpg"
import foto8 from "@/assets/img/foto8.jpg"
import foto9 from "@/assets/img/foto9.jpg"
import foto10 from "@/assets/img/foto10.jpg"
import foto11 from "@/assets/img/foto11.jpg"
import foto12 from "@/assets/img/foto12.jpg"

interface Subscriber {
  id: string
  email: string
  confirmed?: boolean
  subscribed_at?: string
}

export default function App() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const [showCharts, setShowCharts] = useState(false)
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])

  const contentRef = useRef<HTMLDivElement | null>(null)

  // 🔹 Nuevo useEffect para confirmar suscripción desde el token en la URL
  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    if (token) {
      const confirmSubscription = async () => {
        try {
          const res = await fetch(`https://palestine-fawn.vercel.app/api/confirm?token=${token}`);
          if (res.ok) {
            console.log("✅ Suscripción confirmada con éxito!");
          } else {
            console.error("❌ No se pudo confirmar la suscripción");
          }
        } catch (err) {
          console.error("❌ Error confirmando la suscripción:", err);
        }
      };
      confirmSubscription();
    }
  }, []);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleShowCharts = () => {
    setShowCharts(true)
    setShowTestimonials(false)
    setTimeout(scrollToContent, 50)
  }

  const handleHideCharts = () => {
    setShowCharts(false)
    setShowTestimonials(false)
    setTimeout(scrollToContent, 50)
  }

  const handleShowTestimonials = () => {
    setShowCharts(false)
    setShowTestimonials(true)
    setTimeout(scrollToContent, 50)
  }

  // Aquí defines los testimonios que quieres mostrar
  const testimonios = [
    {
      nombre: "Ahmed",
      descripcion: "Perdí mi casa y mi escuela durante los bombardeos...",
      imgSrc: foto3,
    },
    {
      nombre: "Fatima",
      descripcion: "Mis hijos no pueden salir a jugar, viven con miedo constante...",
      imgSrc: foto2,
    },
    {
      nombre: "Yusuf",
      descripcion: "Vemos hospitales colapsar y no hay acceso a medicinas...",
      imgSrc: foto1,
    },
    {
      nombre: "Layla",
      descripcion: "Cada noche tememos por nuestra vida y no sabemos si amaneceremos...",
      imgSrc: foto4,
    },
    {
      nombre: "Omar",
      descripcion: "El agua y la electricidad son un lujo que ya no podemos garantizar...",
      imgSrc: foto8,
    },
    {
      nombre: "Amina",
      descripcion: "Mi familia se ha visto obligada a dormir en refugios improvisados...",
      imgSrc: foto5,
    },
    {
      nombre: "Khalid",
      descripcion: "He perdido amigos y vecinos en los ataques, es un dolor constante...",
      imgSrc: foto6,
    },
    {
      nombre: "Nadia",
      descripcion: "No puedo enviar a mis hijos a la escuela, temo por su seguridad...",
      imgSrc: foto7,
    },
    {
      nombre: "Samir",
      descripcion: "Los mercados y hospitales están destruidos, la vida diaria es imposible...",
      imgSrc: foto9,
    },
    {
      nombre: "Hana",
      descripcion: "Cada día luchamos por sobrevivir, y aún así seguimos esperando un cambio...",
      imgSrc: foto11,
    },
    {
      nombre: "Tariq",
      descripcion: "Mis recuerdos de la infancia se han desvanecido entre el miedo y la violencia...",
      imgSrc: foto10,
    },
    {
      nombre: "Rania",
      descripcion: "No hay paz, solo incertidumbre. Cada día es un desafío...",
      imgSrc: foto12,
    }
  ]

  return (
    <div className={`min-h-screen flex flex-col gap-8 transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      <main className="relative w-full h-full">
        <Hero isDark={isDark} />

        <div ref={contentRef}>
          {/* Vista principal con cards */}
          {!showCharts && !showTestimonials && (
            <>
              <div className="max-w-4xl mx-auto mt-12 px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Palestina enfrenta una crisis humanitaria sin precedentes
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Cada día, familias enteras viven bajo asedio, hospitales colapsan y los niños pierden su infancia. Conocer la magnitud del sufrimiento y escuchar las historias de quienes lo viven es el primer paso para tomar acción y generar un cambio real.
                </p>
              </div>

              <div className="flex w-full max-w-6xl flex-row justify-center gap-6 flex-wrap mx-auto mt-20">
                <CardItem
                  title="Una crisis humanitaria sin precedentes"
                  description="Miles de vidas civiles están en riesgo. Familias enteras viven bajo el asedio, sin acceso seguro a agua, electricidad o atención médica. Los hospitales colapsan, los alimentos escasean y las comunicaciones son bloqueadas. Lo que ocurre en Palestina no es un conflicto lejano: es una violación continua de los derechos humanos y un recordatorio urgente de que la humanidad no puede permanecer en silencio ante el sufrimiento de un pueblo que solo busca vivir en paz."
                  imgSrc={palestinaWar}
                  isDark={isDark}
                  actionText="Ver cifras reales"
                  onClick={handleShowCharts}
                />
                <CardItem
                  title="Historias que el mundo no debería ignorar"
                  description="Detrás de cada cifra hay un rostro, un nombre, un sueño roto. Niños que ya no pueden ir a la escuela, madres que buscan a sus hijos entre los escombros, ancianos que resisten con la esperanza de ver un nuevo amanecer. Sus testimonios son un grito de dignidad y resistencia, una llamada a recordar que la empatía es el primer paso hacia la justicia. Cada historia merece ser contada, compartida y recordada."
                  imgSrc={kidPalestina}
                  isDark={isDark}
                  actionText="Leer testimonios"
                  onClick={handleShowTestimonials}
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
            </>
          )}

          {/* Vista de gráficos */}
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

              <button
                onClick={handleHideCharts}
                className={`mt-10 px-6 py-3 rounded-xl transition-all ${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
              >
                ← Volver
              </button>
            </section>
          )}

          {/* Vista de testimonios */}
          {showTestimonials && (
          <section className="max-w-4xl mx-auto mt-16 px-4 flex flex-col items-center gap-10 animate-fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Testimonios de víctimas</h2>

            <div className="flex flex-col gap-6 w-full">
              {testimonios.map((t, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-muted dark:bg-gray-1000 rounded-xl p-4 shadow-md"
                >
                  {/* Foto a la izquierda */}
                  <img
                    src={t.imgSrc}
                    alt={t.nombre}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />

                  {/* Testimonio a la derecha entre comillas */}
                  <p className="text-lg md:text-xl italic leading-relaxed text-gray-800 dark:text-gray-200">
                    “{t.descripcion}”
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={handleHideCharts}
              className={`mt-10 px-6 py-3 rounded-xl transition-all ${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
            >
              ← Volver
            </button>
          </section>
        )}
        </div>

        <div className="h-20"></div>
        <CarouselDApiDemo autoPlayDelay={4000} />
        <SubscriptionForm onNewSubscriber={(newSub) => setSubscribers([...subscribers, newSub])} />
        <Footer />
      </main>
    </div>
  )
}
