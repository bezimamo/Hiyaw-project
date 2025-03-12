import GridPattern from "@/components/ui/grid-pattern";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <GridPattern
        containerClassName="absolute inset-0"
        dotColor="rgba(255,255,255,0.3)"
        dotSize={1}
        dotSpacing={30}
        lineColor="rgba(255,255,255,0.1)"
        lineSpacing={5}
        perspective={1000}
        speed={0.002}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Our Expertise, Your Solutions.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            Innovative software, web development, AI, and more to help your business thrive.
        </p>
        <div className="mt-10">
          <Button size="lg">Explore Our Services</Button>
        </div>
      </div>
    </div>
  );
}
