"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#directory", label: "Directory" },
  { href: "/events", label: "Events" },
  { href: "/book", label: "Book the Space" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-medium tracking-tight text-ink">
            three<span className="text-rust">fifteen</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink-soft transition-colors hover:text-rust"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/threefifteenaspen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pine px-4 py-2 text-[14px] font-semibold text-cream transition-colors hover:bg-pine-dark"
          >
            @threefifteenaspen
          </a>
        </nav>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line/70 px-5 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-sand/60"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/threefifteenaspen"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-lg bg-pine px-3 py-2.5 text-center text-base font-semibold text-cream"
          >
            @threefifteenaspen
          </a>
        </nav>
      )}
    </header>
  );
}
