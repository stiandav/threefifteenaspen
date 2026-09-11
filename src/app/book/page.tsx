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
    description:
      "A brick, string-lit outdoor courtyard with Aspen Mountain as a backdrop, ideal for receptions, launches, and mixers of 40 to 150 guests.",
    goodFor: "Receptions · Launches · Mixers",
  },
  {
    name: "The Grove Community Room",
    description:
      "A flexible lower-level room used for yoga, comedy nights, and dance classes by day, easily converted into a private lounge for evening events. Booking proceeds help fund the Aspen Arts Club.",
    goodFor: "Private parties · Workshops · Screenings",
  },
  {
    name: "Upper-Level Studios",
    description:
      "The Aspen Arts Club's working studio floor is available for pop-up exhibitions, artist talks, and small gatherings when not in residency use.",
    goodFor: "Exhibitions · Artist talks · Small gatherings",
  },
];

const steps = [
  {
    n: "01",
    text: "Tell us your date, guest count, and which space you have in mind.",
  },
  {
    n: "02",
    text: "We confirm availability and connect you with in-house food, bar, and art partners if you want them.",
  },
  {
    n: "03",
    text: "Your event runs. If it's through The Grove, a share of proceeds supports the Aspen Arts Club.",
  },
];

export default function BookPage() {
  return (
    <>
      <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-black">
        <Image
          src="/images/building-courtyard-hero.jpg"
          alt="The brick courtyard at 315 E. Hyman Ave, set up for an evening event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-14 pt-32 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-white/60">
            Private events
          </p>
          <h1 className="mt-2 font-display text-4xl font-medium text-white sm:text-6xl">
            Book the space.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            A brick courtyard, a flexible community room, and a working artist studio floor, all
            under one historic downtown roof, steps from the Wheeler Opera House.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
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
      </section>

      <section className="border-y border-black bg-black text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-white/60">
            How it works
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
            Three steps to a booked date.
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="border-t border-white/25 pt-4">
                <span className="text-xs font-medium text-white/50">{s.n}</span>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="request" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <BookingForm />
          <p className="mt-6 text-center text-sm text-muted">
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
        </div>
      </section>
    </>
  );
}
