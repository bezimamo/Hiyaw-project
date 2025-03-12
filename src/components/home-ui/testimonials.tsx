import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const testimonials = [
  {
    author: "Jane Doe",
    role: "CEO at TechCorp",
    avatar: "/avatar1.jpg",
    content: "Working with this team has been an absolute game-changer for our business. Their innovative solutions have streamlined our processes and boosted our productivity tenfold!",
    linkedinUrl: "https://www.linkedin.com/in/janedoe/post/1"
  },
  {
    author: "John Smith",
    role: "CTO at InnovateCo",
    avatar: "/avatar2.jpg",
    content: "I can't recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled. Our ROI has skyrocketed since partnering with them.",
    linkedinUrl: "https://www.linkedin.com/in/johnsmith/post/1"
  },
  {
    author: "Emily Brown",
    role: "Marketing Director at GrowthInc",
    avatar: "/avatar3.jpg",
    content: "The customer support is top-notch. They're always available to answer questions and provide guidance. It's refreshing to work with a company that truly cares about its clients' success.",
    linkedinUrl: "https://www.linkedin.com/in/emilybrown/post/1"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry professionals have to say about our services and solutions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex-grow pt-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="pt-4 pb-6">
                <Button asChild variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                  <Link href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className="w-5 h-5 mr-2 text-[#0A66C2]" />
                    View on LinkedIn
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}