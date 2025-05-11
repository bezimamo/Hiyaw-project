import Hero from "@/components/project-ui/hero";
import ProjectGallery from "@/components/project-ui/ProjectGallery";
import Testimonials from "@/components/project-ui/Testimonials";
import CallToAction from "@/components/project-ui/CallToAction";


export default function ProjectsPage() {
  return (
    <main>
      <Hero />
      <ProjectGallery />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
