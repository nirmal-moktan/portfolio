export default function About() {
  return (
    <section id="about" className="manuscript-section mx-auto grid w-full max-w-6xl gap-7 border-b border-border px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-24">
      <h2 className="manuscript-heading font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
        A Little About Me
      </h2>

      <div className="max-w-3xl space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
        <p>
          I&apos;ve always been the kind of person who wants to know how things work.
          Sometimes that means learning something new, sometimes it means building
          something, and sometimes it means spending way too long figuring out
          something that probably had a simple answer.
        </p>

        <p>
          I&apos;m currently studying Computer Science at Jacksonville State
          University, but there&apos;s more to me than code. I enjoy gaming,
          exploring new ideas, and going down random rabbit holes of curiosity.
        </p>

        <p>
          This little corner of the internet is where I share what I&apos;ve been
          working on, what I&apos;m learning, and a bit of who I am.
        </p>

        <p>
          And if you noticed the magical atmosphere, that&apos;s intentional.
          If only debugging were as easy as casting <em>Reparo</em>.
        </p>
      </div>
    </section>
  );
}
