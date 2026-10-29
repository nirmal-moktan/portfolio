type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({
  title,
  description,
}: ProjectCardProps) {
  return (
    <article className="project-card relative h-full min-w-0 rounded-xl border border-border p-6 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-gold hover:shadow-md motion-reduce:transition-none sm:p-7">
      <h3 className="mb-4 font-serif text-xl font-medium leading-8 text-foreground sm:min-h-16 sm:text-2xl">{title}</h3>
      <p className="text-sm leading-7 text-muted sm:text-base">{description}</p>
    </article>
  );
}