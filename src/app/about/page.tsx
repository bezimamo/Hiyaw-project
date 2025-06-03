import { AboutHero } from "@/components/about-ui/hero"
import { CompanyStory } from "@/components/about-ui/company-story"
import { CompanyInfo } from "@/components/about-ui/company-info"
import { TeamSection } from "@/components/about-ui/team-section"


export default function About() {
  return (
    <main className="bg-white dark:bg-[#41423A] text-[#41423A] dark:text-white pt-16">
      <AboutHero/>
      <CompanyStory/>
      <CompanyInfo/>
      <TeamSection/>
      
    </main>
  )
}