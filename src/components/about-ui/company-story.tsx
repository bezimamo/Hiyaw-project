"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowUpRight } from 'lucide-react'

export function CompanyStory() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">
              We Put <span className="relative">
                People
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
              </span> First
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At [Your Company Name], we believe technology should empower people and make their lives easier. Our mission is simple: to create solutions that prioritize people at every step.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="group">
                  Read More
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Our Story</DialogTitle>
                </DialogHeader>
                <div className="mt-6 text-muted-foreground">
                  <p>
                    From our beginnings as a small team with big dreams, we&apos;ve been driven by a commitment to innovation and collaboration. Our journey has been about building a company that places people at the center—whether they are team members, clients, or the communities we serve.
                  </p>
                  <p className="mt-4">
                    We focus on creating tech that genuinely makes a difference, and we&apos;re excited about continuing to shape the future, one solution at a time.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center">
              <span className="text-6xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
