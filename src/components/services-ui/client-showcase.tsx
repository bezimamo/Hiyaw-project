import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const clients = [
  { name: "TechCorp", logo: "/client1-logo.svg" },
  { name: "InnovateNow", logo: "/client2-logo.svg" },
  { name: "FutureSystems", logo: "/client3-logo.svg" },
  { name: "DataDrive", logo: "/client4-logo.svg" },
  { name: "CloudMasters", logo: "/client5-logo.svg" },
  { name: "AIVentures", logo: "/client6-logo.svg" },
]

const testimonials = [
  { name: "John Doe", company: "TechCorp", quote: "Their custom software solution dramatically improved our operational efficiency." },
  { name: "Jane Smith", company: "InnovateNow", quote: "The AI-driven insights have been game-changing for our business strategy." },
  { name: "Mike Johnson", company: "FutureSystems", quote: "Their cloud migration expertise ensured a smooth transition with zero downtime." },
]

export function ClientShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={client.logo} alt={client.name} width={120} height={60} className="max-w-[120px] h-auto" />
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}