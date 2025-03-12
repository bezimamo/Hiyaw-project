import  Marquee  from "@/components/ui/marquee"
import Image from "next/image"

const clients = [
  { name: "Client 1", logo: "/client1-logo.svg" },
  { name: "Client 2", logo: "/client2-logo.svg" },
  { name: "Client 3", logo: "/client3-logo.svg" },
  { name: "Client 4", logo: "/client4-logo.svg" },
  { name: "Client 5", logo: "/client5-logo.svg" },
  { name: "Client 6", logo: "/client6-logo.svg" },
]

export function Clients() {
  return (
    <section className="py-24 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Clients We&apos;ve Had the Pleasure to Work With</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re proud to have collaborated with these industry leaders, helping them achieve their digital transformation goals.
          </p>
        </div>
        <Marquee className="py-12" pauseOnHover speed={50}>
          {clients.map((client, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-w-[120px] h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}