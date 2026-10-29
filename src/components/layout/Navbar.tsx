export default function Navbar() {
  return (
    <nav className="manuscript-nav sticky top-0 z-50 flex w-full items-center justify-center border-b border-border px-4 py-3 sm:px-8 sm:py-4">

      <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:gap-x-5">
        <a href="#about" className="inline-flex min-h-11 items-center rounded-md px-2.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:bg-accent-soft hover:text-accent motion-reduce:transition-none sm:px-4">About</a>
        <a href="#projects" className="inline-flex min-h-11 items-center rounded-md px-2.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:bg-accent-soft hover:text-accent motion-reduce:transition-none sm:px-4">Projects</a>
        <a href="#skills" className="inline-flex min-h-11 items-center rounded-md px-2.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:bg-accent-soft hover:text-accent motion-reduce:transition-none sm:px-4">Skills</a>
        <a href="#contact" className="inline-flex min-h-11 items-center rounded-md px-2.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:bg-accent-soft hover:text-accent motion-reduce:transition-none sm:px-4">Contact</a>
      </div>
    </nav>
  );
}