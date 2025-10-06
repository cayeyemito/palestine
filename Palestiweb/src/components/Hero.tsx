import flagImg from "@/assets/img/flag.png"

interface HeroProps {
  isDark: boolean
}

export function Hero({ isDark }: HeroProps) {
  return (
    <div className="relative w-full h-[60vh] mt-[6.8vh]">
      <img className="w-full h-full object-cover" src={flagImg} alt="Flag" />
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
  )
}
