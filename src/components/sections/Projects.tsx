import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="manuscript-section mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 border-b border-border px-6 py-16 sm:grid-cols-2 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-6 lg:py-24">
      <h2 className="manuscript-heading font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl col-span-full mb-4 sm:mb-6">My Projects</h2>

      <a
        href="https://aozora-restaurant.pages.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full min-w-0 rounded-xl"
      >
        <ProjectCard
          title="Aozora Japanese Restaurant"
          description="A website developed for a restaurant in Pokhara, Nepal."
        />
      </a>
      <a
        href="https://github.com/nirmal-moktan/spending-analyzer"
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full min-w-0 rounded-xl"
      >
        <ProjectCard 
          title="Spending Analyzer" 
          description="Full-stack personal finance application using Python, FastAPI, PostgreSQL, React, and TypeScript."
        />
      </a>
      <a
        href="https://github.com/nirmal-moktan/job-application-tracker"
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full min-w-0 rounded-xl"
      >
        <ProjectCard
          title="Job Application Tracker"
          description="Python application using SQLite to manage and track job applications."
        />
      </a>
    </section>
  );
}