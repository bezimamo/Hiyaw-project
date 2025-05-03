import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Using Next.js Image for optimization */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/training.png" // Replace with your actual hero image
          alt="2D Animation Background"
          fill
          priority
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay - More versatile than solid color */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#41423A]/90 via-[#41423A]/70 to-transparent dark:bg-gradient-to-t dark:from-black/90 dark:via-black/70" />

      {/* Text Content with Animation-ready classes */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8B133] mb-6 animate-fade-in-up">
          Master <span className="text-white">2D Animation</span>
        </h1>
        <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
          Transform your drawings into captivating stories with professional animation techniques
        </p>
        
        {/* CTA Button */}
        <button className="bg-[#F05A28] hover:bg-[#F8B133] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200 shadow-lg">
          Start Learning Today
        </button>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}