"use client"

import { useState } from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Laptop, Code, Brain, Cloud, Compass, BarChart } from 'lucide-react'

const services = [
  {
    icon: Laptop,
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed to streamline your business processes and drive efficiency.",
    details: "Our custom software solutions are tailored to your specific needs, ensuring a perfect fit for your business operations. We work closely with you to understand your unique challenges and develop innovative solutions that drive efficiency and growth.",
    benefits: ["Increased operational efficiency", "Reduced costs", "Improved customer satisfaction", "Scalable and future-proof solutions"]
  },
  {
    icon: Code,
    title: "Web Development & Design",
    description: "Responsive, user-friendly websites that scale with your business needs.",
    details: "We create stunning, responsive websites that not only look great but also perform exceptionally. Our web solutions are built with scalability in mind, ensuring they grow with your business.",
    benefits: ["Mobile-friendly designs", "SEO optimization", "Fast loading speeds", "Easy content management"]
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Harness the power of AI to automate tasks, enhance customer interactions, and drive business growth.",
    details: "Leverage cutting-edge AI technologies to automate repetitive tasks, gain valuable insights from your data, and create intelligent systems that learn and improve over time.",
    benefits: ["Increased productivity", "Enhanced decision-making", "Improved customer experiences", "Predictive analytics"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Infrastructure",
    description: "Scalable and secure cloud infrastructure to meet your business demands.",
    details: "We design and implement robust cloud solutions that provide the flexibility, scalability, and security your business needs. Our cloud infrastructure solutions ensure your systems are always available and performing at their best.",
    benefits: ["Improved scalability", "Enhanced security", "Reduced IT costs", "Increased reliability"]
  },
  {
    icon: Compass,
    title: "Tech Consulting & Strategy",
    description: "Strategic guidance to help you leverage technology for competitive advantage.",
    details: "Our experienced consultants work with you to develop a comprehensive technology strategy aligned with your business goals. We help you navigate the complex tech landscape and make informed decisions.",
    benefits: ["Aligned IT and business strategies", "Optimized technology investments", "Improved competitive positioning", "Risk mitigation"]
  },
  {
    icon: BarChart,
    title: "Data Analytics & Insights",
    description: "Turn data into actionable insights that drive better business decisions.",
    details: "We help you unlock the power of your data through advanced analytics techniques. Our solutions provide you with real-time insights that enable data-driven decision-making across your organization.",
    benefits: ["Data-driven decision making", "Improved forecasting", "Identification of new opportunities", "Enhanced customer understanding"]
  }
]

export function ServiceCards() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Dialog open={openDialog === service.title} onOpenChange={(open) => setOpenDialog(open ? service.title : null)}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{service.title}</DialogTitle>
                      <DialogDescription>{service.description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">How It Works</h4>
                      <p>{service.details}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Benefits</h4>
                      <ul className="list-disc pl-5">
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="mt-6 w-full">Request a Consultation</Button>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}