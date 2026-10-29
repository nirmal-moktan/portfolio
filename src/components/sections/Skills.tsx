const skillCategories = [
  {
    name: "Languages",
    skills: [
      "Python", "JavaScript", "TypeScript",
      "Java", "C++", "SQL", "R", "HTML", "CSS",
    ],
  },
  {
    name: "Libraries",
    skills: [
      "React", "SQLAlchemy", "openpyxl",
    ],
  },
  {
    name: "Frameworks",
    skills: [
      "Next.js", "FastAPI", "Flask",
      "Tailwind CSS", "pytest", "JUnit",
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      "Git", "GitHub", "Linux", "Bash",
      "Node.js", "PostgreSQL", "SQLite",
      "Cloudflare Pages",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="manuscript-section mx-auto grid w-full max-w-6xl gap-7 border-b border-border px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-24">
      <h2 className="manuscript-heading font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
        Technical Skills
      </h2>

      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="manuscript-panel min-w-0 rounded-xl border border-border p-5 sm:p-6"
          >
            <h3 className="mb-4 font-serif text-xl font-medium leading-7 text-foreground">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-gold/30 bg-background px-3 py-1.5 text-sm leading-6 text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}