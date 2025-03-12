import {ServicesHero} from '@/components/services-ui/hero'
import {ServiceOverview} from '@/components/services-ui/service-overview'
import {ServiceCards} from '@/components/services-ui/service-cards'
import {ClientShowcase} from '@/components/services-ui/client-showcase'
import {ContactForm} from '@/components/services-ui/contact-form'

export default function Services() {
  return (
    <main className="pt-16"> {/* Add padding to account for fixed navbar */}
     <ServicesHero />
     <ServiceOverview />
     <ServiceCards />
     <ClientShowcase />
     <ContactForm />
    </main>
  )
}