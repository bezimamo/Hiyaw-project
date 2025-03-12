import { Hero } from '@/components/home-ui/hero'
import { Services } from '@/components/home-ui/services'
import { Clients } from '@/components/home-ui/clients'
import { Testimonials } from '@/components/home-ui/testimonials'

export default function Home() {
  return (
    <main className="pt-16"> {/* Add padding to account for fixed navbar */}
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
    </main>
  )
}