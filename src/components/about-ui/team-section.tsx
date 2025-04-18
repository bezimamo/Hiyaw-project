import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaQuoteLeft, FaInstagram, FaTelegram, FaTiktok, FaLink, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Amanuel Zebre",
    role: "Co-Founder / Animator",
    image: "/assets/animator1.png",
    background: "A 2D animator with 4+ years experience. Started on Fiverr in 2021 with lip-sync animations. Passionate about visual storytelling rooted in Ethiopian culture.",
    social: {
      instagram: "@a3anuel",
      telegram: "@a3anuel",
      tiktok: "@a3anuel",
      portfolio: "@a3anuel"
    }
  },
  {
    name: "Biniyam Masresha",
    role: "Co-Founder / Visual Artist",
    image: "/assets/animator2.png",
    background: "2D animator and educator passionate about storytelling through expressive characters and visuals. Determined to redefine Ethiopian animation.",
    social: {
      instagram: "https://www.instagram.com/kebero27?igsh=MXRpODBkcWxmeWJmaQ==",
      linkedin: "https://www.linkedin.com/in/biniyam-masresha-556403326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      tiktok: "https://www.tiktok.com/@kebero27?_t=ZM-8vOGtHKBDtf&_r=1",
      portfolio: "https://www.behance.net/bini27"
    }
  },
  {
    name: "Yishak Abrham",
    role: "Clean-up Artist / Rigger",
    image: "/assets/animator3.png",
    background: "Designer responsible for refining linework and choosing color palettes for characters and scenes.",
    social: {
      instagram: "https://www.instagram.com/yise__ab?igsh=MWVoN2JrMWNkdTZiNA==",
      //telegram: "#",
      //tiktok: "#",
      portfolio: "https://www.fiverr.com/s/GzjQD9q"
    }
  },
  {
    name: "Bereket Getachew",
    role: "Animator / Character Designer",
    image: "/assets/animator4.png",
    background: "Animator and character designer with 3 years in the industry, currently working on a comic series.",
    social: {
      instagram: "bereket2d",
      telegram: "@bereket2d",
      tiktok: "@bereket2d",
      portfolio: "https://t.me/bereket2ddraws"
    }
  },
  {
    name: "Fikir Samuel",
    role: "2D Digital Artist",
    image: "/assets/animator4.png",
    background: "Lover of drawing, comics, anime, and games. Blending creative passions into visuals.",
    social: {
      instagram: "#",
      telegram: "@nonchallagrind",
      tiktok: "#",
      portfolio: "https://sites.google.com/view/fikirsaumuel-egi-2dsubmissions/home"
    }
  }
];

export function TeamSection() {
  return (
    <section className="flex flex-col items-center py-10 px-16 container mx-auto font-['Poppins']">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#F05A28]">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-lg rounded-2xl border border-[#F05A28]/30 h-full">
              <CardHeader className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-[#F05A28] text-lg font-semibold">{member.name}</CardTitle>
                <CardDescription className="text-[#41423A]/80 text-sm">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col text-center justify-between px-4">
                <div className="relative bg-[#F05A28]/10 text-[#41423A] rounded-lg p-4 mb-4 text-sm">
                  <FaQuoteLeft className="absolute top-2 left-2 text-[#F05A28] opacity-70" />
                  <p className="ml-6">{member.background}</p>
                </div>
                <div className="flex justify-center space-x-4 text-[#F05A28] text-lg">
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={member.social.telegram} target="_blank" rel="noopener noreferrer">
                    <FaTelegram />
                  </a>
                  <a href={member.social.tiktok} target="_blank" rel="noopener noreferrer">
                    <FaTiktok />
                  </a>
                  <a href={member.social.portfolio} target="_blank" rel="noopener noreferrer">
                    <FaLink />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
