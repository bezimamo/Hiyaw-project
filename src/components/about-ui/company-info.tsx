"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'

const infoCards = [
  {
    title: "Our Mission",
    description: "To empower businesses through innovative technology solutions.",
    content: "We strive to create cutting-edge software that solves real-world problems and drives digital transformation across industries. Our mission is to make complex technologies accessible and user-friendly, enabling businesses of all sizes to thrive in the digital age."
  },
  {
    title: "Our Values",
    description: "Integrity, Innovation, Collaboration, and Excellence.",
    content: "Integrity: We uphold the highest ethical standards in all our dealings. Innovation: We constantly push the boundaries of what's possible. Collaboration: We believe in the power of teamwork and partnerships. Excellence: We are committed to delivering the best in everything we do."
  },
  {
    title: "Our Vision",
    description: "To be the global leader in transformative tech solutions.",
    content: "We envision a future where our technology solutions are at the forefront of global innovation, driving positive change across industries and improving lives worldwide. We aim to be the go-to partner for businesses seeking to leverage technology for growth and success."
  }
]

export function CompanyInfo() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{card.content.slice(0, 100)}...</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Dialog open={openDialog === card.title} onOpenChange={(open) => setOpenDialog(open ? card.title : null)}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{card.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-6 text-muted-foreground">
                      <p>{card.content}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}