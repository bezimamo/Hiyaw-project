// src/components/training-ui/Hero.tsx


export const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
     
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8B133] mb-6 animate-fade-in-up">
          Master <span className="text-white">2D Animation</span>
        </h1>
        <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
          Transform your drawings into captivating stories with professional animation techniques
        </p>
        
       </div>
    </section>
  )
}