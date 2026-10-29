import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero-background relative isolate mx-auto flex min-h-[30rem] w-full max-w-6xl flex-col items-center justify-center gap-7 overflow-hidden border-y border-border px-6 py-16 text-center sm:min-h-[34rem] sm:px-10 sm:py-20 lg:py-24 lg:min-h-[36rem] lg:rounded-2xl lg:border">
            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.12] tracking-tight text-foreground sm:text-6xl lg:text-7xl">Hey, I&apos;m Nirmal!</h1>
            <p className="max-w-xl text-base leading-8 text-muted sm:text-xl sm:leading-9">Gamer at heart. Curious by nature. Developer by choice.</p>

            <figure className="mt-3 w-full max-w-5xl">
                <Image
                    src="/images/glenfinnan-train.jpg"
                    alt="Steam train crossing the curved stone arches of Glenfinnan Viaduct beneath misty Scottish Highland hills."
                    width={4681}
                    height={2886}
                    unoptimized
                    loading="eager"
                    className="h-auto w-full rounded-xl border border-gold/60 shadow-sm"
                />
            </figure>
        </section>
    );
}