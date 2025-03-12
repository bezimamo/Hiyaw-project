import { AboutHero } from "@/components/about-ui/hero"
import { CompanyStory } from "@/components/about-ui/company-story"
import { CompanyInfo } from "@/components/about-ui/company-info"
import { TeamSection } from "@/components/about-ui/team-section"
import { MilestonesSection } from "@/components/about-ui/milestone-section"

export default function About() {
  return (
    <main className="pt-16"> {/* Add padding to account for fixed navbar */}
      <AboutHero/>
      <CompanyStory/>
      <CompanyInfo/>
      <TeamSection/>
      <MilestonesSection/>
    </main>
  )
}