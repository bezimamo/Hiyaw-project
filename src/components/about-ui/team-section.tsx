import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "/jane-doe.jpg",
    background: "15+ years in tech leadership",
    badges: ["Visionary", "Strategic Thinker"]
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "/john-smith.jpg",
    background: "Former Google engineer",
    badges: ["AI Expert", "Cloud Architecture"]
  },
  {
    name: "Emily Brown",
    role: "Head of Design",
    image: "/emily-brown.jpg",
    background: "Award-winning UX designer",
    badges: ["Creative", "User-Centric"]
  },
  {
    name: "Michael Johnson",
    role: "Lead Developer",
    image: "/michael-johnson.jpg",
    background: "Full-stack wizard",
    badges: ["Problem Solver", "Code Quality Advocate"]
  }
]

export function TeamSection() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-muted-foreground mb-4">{member.background}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary">{badge}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}