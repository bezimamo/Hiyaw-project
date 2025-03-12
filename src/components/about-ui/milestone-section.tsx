"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'

const milestones = [
  {
    year: 2018,
    title: "Company Founded",
    description: "Started with a team of 3 passionate developers",
    details: "Our journey began in a small garage with a big dream. Armed with nothing but our laptops and an insatiable desire to innovate, we set out to change the tech landscape."
  },
  {
    year: 2019,
    title: "First Major Client",
    description: "Landed a contract with a Fortune 500 company",
    details: "This was a turning point for us. The project challenged us to scale our operations and deliver enterprise-grade solutions, setting the stage for future growth."
  },
  {
    year: 2020,
    title: "Product Launch",
    description: "Released our flagship SaaS platform",
    details: "After months of development and testing, we launched our product to the market. The response was overwhelming, validating our vision and hard work."
  },
  {
    year: 2021,
    title: "Series A Funding",
    description: "Raised $10 million to accelerate growth",
    details: "This investment allowed us to expand our team, enhance our product offerings, and explore new markets. It was a testament to the potential of our technology and business model."
  },
  {
    year: 2022,
    title: "Global Expansion",
    description: "Opened offices in 3 new countries",
    details: "We took our success global, establishing a presence in key tech hubs around the world. This move brought us closer to our international clients and opened up new opportunities."
  },
  {
    year: 2023,
    title: "Industry Recognition",
    description: "Won 'Innovator of the Year' award",
    details: "Being recognized by our peers and industry experts was a humbling experience. It reinforced our commitment to pushing the boundaries of what's possible in tech."
  }
]

export function MilestonesSection() {
  const [openDialog, setOpenDialog] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey of Innovation</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 bg-primary rounded-full z-10"></div>
                <Card className={`w-1/2 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="text-3xl font-bold text-primary mr-2">{milestone.year}</span>
                      {milestone.title}
                    </CardTitle>
                    <CardDescription>{milestone.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full group">
                          Learn More
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{milestone.title} - {milestone.year}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-6 text-muted-foreground">
                          <p>{milestone.details}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}