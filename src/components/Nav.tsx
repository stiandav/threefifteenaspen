"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#directory", label: "Directory" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home hero photo is bright at the top, so start with dark text.
  // Every other hero is a dark photo, so start with light text.
  const startsLight = pathname === "/";
  const solid = scrolled || open;
  const textColor = solid ? "text-black" : startsLight ? "text-black" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "border-b border-black bg-white" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className={`font-display text-2xl tracking-tight ${textColor}`}>
          threefifteen
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium uppercase tracking-wider ${textColor} hover:opacity-60`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="border border-black bg-black px-4 py-2 text-[13px] font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
          >
            Book
          </Link>
        </nav>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[1.5px] w-6 ${textColor.replace("text-", "bg-")} transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 ${textColor.replace("text-", "bg-")} transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 ${textColor.replace("text-", "bg-")} transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black bg-white px-5 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-1 py-2.5 text-base font-medium uppercase tracking-wide text-black"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-2 border border-black bg-black px-1 py-2.5 text-center text-base font-medium uppercase tracking-wide text-white"
            onClick={() => setOpen(false)}
          >
            Book
          </Link>
        </nav>
      )}
    </header>
  );
}
