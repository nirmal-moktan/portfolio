"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL_ADDRESS = "nirmalmoktan.work@gmail.com";

export default function Contact() {
    const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
    const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimer.current !== null) {
                clearTimeout(resetTimer.current);
            }
        };
    }, []);

    async function copyEmail() {
        if (resetTimer.current !== null) {
            clearTimeout(resetTimer.current);
            resetTimer.current = null;
        }

        try {
            await navigator.clipboard.writeText(EMAIL_ADDRESS);
            setCopyStatus("copied");
            resetTimer.current = setTimeout(() => {
                setCopyStatus("idle");
                resetTimer.current = null;
            }, 2000);
        } catch {
            setCopyStatus("error");
        }
    }
    return (
        <section id="contact" className="manuscript-section mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:py-24">
            <h2 className="manuscript-heading font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl mb-6">
                Get in Touch
            </h2>

            <p className="mb-6 max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
                I'm open to software engineering opportunities and collaborations. Feel free to connect with me!
            </p>

            <div className="mb-6 max-w-xl">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                    <span className="min-w-0 flex-1 select-text break-all text-sm leading-6 text-foreground sm:text-base">
                        {EMAIL_ADDRESS}
                    </span>
                    <button
                        type="button"
                        onClick={copyEmail}
                        aria-label="Copy email address"
                        className="inline-flex min-h-11 min-w-20 shrink-0 cursor-pointer items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-accent transition-colors duration-200 hover:border-accent hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
                    >
                        {copyStatus === "copied" ? "Copied!" : "Copy"}
                    </button>
                </div>
                <p className="mt-2 min-h-6 text-sm text-accent" role="status" aria-live="polite" aria-atomic="true">
                    {copyStatus === "copied"
                        ? "Email address copied to clipboard."
                        : copyStatus === "error"
                          ? "Unable to copy. Please select and copy the email address above."
                          : ""}
                </p>
            </div>

            <a 
            href="https://www.linkedin.com/in/nirmal-moktan"
            target = "_blank"
            rel="noopner noreferrer"
            className="external-link">
                LinkedIn
            </a>     

            <a 
            href="https://github.com/nirmal-moktan"
            target="_blank"
            rel="noopner noreferrer"
            className="external-link">
                GitHub
            </a>

            <a
            href="mailto:nirmalmoktan.work@gmail.com"
            className="external-link">
                Email
            </a>
        </section>
    );
}