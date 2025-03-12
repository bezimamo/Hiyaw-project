import { Button } from "@/components/ui/button"
import GridPattern from "@/components/ui/grid-pattern";
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      
      <div className="absolute inset-0  h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] "></div>
      
      <div className="container grid gap-8 md:grid-cols-2 items-center space-x-3 ml-10">
         <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        className="mask-image:linear-gradient(to_bottom_right,white,transparent,transparent -z-15"
        />
        <div className="space-y-6 ">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 ">
            Revolutionize Your Digital Experience
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Empower your business with cutting-edge solutions that drive growth and innovation.
          </p>
          <Button size="lg" className="rounded-full">
            Get Started
          </Button>
        </div>
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/placeholder.svg"
            alt="Hero Image"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}