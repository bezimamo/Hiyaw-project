import Hero from "@/components/project-ui/hero";
import ProjectGallery from "@/components/project-ui/ProjectGallery";


export default function ProjectsPage() {
  return (
    <main className="bg-white dark:bg-[#41423A] text-[#41423A] dark:text-white">
      <Hero />
      <ProjectGallery />
    </main>
  );
}
