import Image from "next/image";
import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book the Space",
  description:
    "Book ThreeFifteen's courtyard, community room, or upper-level studios for your next event in downtown Aspen, between the Wheeler Opera House and Wagner Park.",
};

const spaces = [
  {
    name: "The Courtyard",
    goodFor: "Receptions · Launches · Mixers",
    description:
      "A brick, string-lit outdoor courtyard with Aspen Mountain as a backdrop, ideal for receptions, launches, and mixers of 40 to 150 guests.",
  },
  {
    name: "The Grove Community Room",
    goodFor: "Private parties · Workshops · Screenings",
    description:
      "A flexible lower-level room used for yoga, comedy nights, and dance classes by day, easily converted into a private lounge for evening events. Booking proceeds help fund the Aspen Arts Club.",
  },
  {
    name: "Upper-Level Studios",
    goodFor: "Exhibitions · Artist talks · Small gatherings",
    description:
      "The Aspen Arts Club's working studio floor is available for pop-up exhibitions, artist talks, and small gatherings when not in residency use.",
  },
];

const steps = [
  "Tell us your date, guest count, and which space you have in mind.",
  "We confirm availability and connect you with in-house food, bar, and art partners if you want them.",
  "Your event runs. If it's through The Grove, a share of proceeds supports the Aspen Arts Club.",
];

export default function BookPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden bg-black">
        <Image
          src="/images/building-courtyard-hero.jpg"
          alt="The brick courtyard at 315 E. Hyman Ave, set up for an evening event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-10 pt-28 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-white/60">
            Private events
          </p>
          <h1 className="mt-2 font-display text-4xl font-medium text-white sm:text-6xl">
            Book the space.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            A brick courtyard, a flexible community room, and a working artist studio floor, all
            under one historic downtown roof, steps from the Wheeler Opera House.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <BookingForm />

          <aside className="flex flex-col gap-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-accent">Spaces</p>
              <ul className="mt-3 divide-y divide-black/10 border-y border-black/10">
                {spaces.map((s) => (
                  <li key={s.name} className="py-3">
                    <p className="font-display text-base font-medium text-black">{s.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted">{s.goodFor}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                How it works
              </p>
              <ol className="mt-3 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="font-display text-black">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-sm text-muted">
              Prefer email? Reach out through{" "}
              <a
                href="https://www.instagram.com/threefifteenaspen"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:decoration-black"
              >
                Instagram
              </a>{" "}
              and we&apos;ll route it to the right person.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-black/10 bg-surface py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            The spaces in detail
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {spaces.map((s) => (
              <div key={s.name} className="border border-black/10 bg-white p-6">
                <h2 className="font-display text-xl font-medium text-black">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
                  {s.goodFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
