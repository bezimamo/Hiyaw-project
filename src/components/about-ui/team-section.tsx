import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "/assets/animator1.png",
    background: "Championing Ethiopian storytelling through animation.",
    badges: ["Cultural Visionary", "Creative Leader"]
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "/assets/animator2.png",
    background: "Driving innovation in animation technology.",
    badges: ["Tech Innovator", "AI & Animation Expert"]
  },
  {
    name: "Emily Brown",
    role: "Head of Design",
    image: "/assets/animator3.png",
    background: "Bridging tradition and modernity through design.",
    badges: ["Visual Storyteller", "Cultural Preservationist"]
  },
  {
    name: "Michael Johnson",
    role: "Lead Animator",
    image: "/assets/animator4.png",
    background: "Bringing Ethiopian stories to life through animation.",
    badges: ["Master Animator", "Narrative Expert"]
  }
];

export function TeamSection() {
  return (
    <section className="flex flex-col items-center py-10 px-16 container mx-auto font-['Poppins']">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#F05A28]">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-lg rounded-lg border border-[#F05A28]/30 h-full">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-[#F05A28] text-center">{member.name}</CardTitle>
                <CardDescription className="text-[#41423A]/80 text-center">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow text-center justify-between">
                <p className="text-[#41423A]/80 mb-4 flex-grow">{member.background}</p>
                <div className="flex flex-wrap justify-center gap-2 pb-4">
                  {member.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} className="bg-[#F8B133] text-white px-3 py-1 rounded-full shadow-md">{badge}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
