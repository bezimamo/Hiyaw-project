import { Hero } from '@/components/home-ui/hero'
import { About } from '@/components/home-ui/about'
import { Projects } from '@/components/home-ui/projects'
import { Trainings } from '@/components/home-ui/trainings'

export default function Home() {
  return (
    <main className="pt-16"> {/* Add padding to account for fixed navbar */}
      <Hero />
      <About />
      <Projects />
      <Trainings />
    </main>
  )
}