import ProjectsHero from "@/components/view/Hero/ProjectsHero";
import ProjectsArchive from "@/components/view/ProjectsArchive/ProjectsArchive";



export default function ProjectsPage() {
  return (
    <main className="relative">
      <ProjectsHero />
      <ProjectsArchive />
    </main>
  );
}