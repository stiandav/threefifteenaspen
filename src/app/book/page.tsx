import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book the Space",
  description:
    "Book ThreeFifteen's courtyard, community room, or upper-level studios for your next event in downtown Aspen — between the Wheeler Opera House and Wagner Park.",
};

const spaces = [
  {
    name: "The Courtyard",
    description:
      "A brick, string-lit outdoor courtyard at the heart of the building with Aspen Mountain as a backdrop — ideal for receptions, launches, and mixers of 40–150 guests.",
    goodFor: "Receptions · Launches · Mixers",
  },
  {
    name: "The Grove Community Room",
    description:
      "A flexible lower-level room used for yoga, comedy nights, and dance classes by day — easily converted into a private lounge for evening events. Booking proceeds help fund the Aspen Arts Club.",
    goodFor: "Private parties · Workshops · Screenings",
  },
  {
    name: "Upper-Level Studios",
    description:
      "The Aspen Arts Club's working studio floor is available for pop-up exhibitions, artist talks, and small gatherings when not in residency use.",
    goodFor: "Exhibitions · Artist talks · Small gatherings",
  },
];

export default function BookPage() {
  return (
    <>
      <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/building-courtyard-hero.jpg"
          alt="The ThreeFifteen courtyard set up for an evening event, with string lights and mountain views"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-14 pt-32 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-pine-light">
            Private events
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-cream sm:text-6xl">
            Book the space.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-cream/85">
            A brick courtyard, a flexible community room, and a working artist studio floor —
            all under one historic downtown roof, steps from the Wheeler Opera House.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {spaces.map((s) => (
            <div key={s.name} className="rounded-2xl border border-line bg-cream p-6">
              <h2 className="font-display text-xl font-semibold text-ink">{s.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-rust">
                {s.goodFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-pine text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pine-light">
              How it works
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Two ways to check availability.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/85">
              ThreeFifteen is listed as a bookable venue on VenueConnect, or you can reach out
              directly and we&apos;ll match you with the right space and the right tenant to help
              run it — catering through Eddy&apos;s, bar service, art installations through the
              Aspen Arts Club, and more.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cream/85">
              <li className="flex gap-3">
                <span className="mt-0.5 text-pine-light">01</span>
                <span>Tell us your date, guest count, and which space you have in mind.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-pine-light">02</span>
                <span>
                  We confirm availability and connect you with in-house food, bar, and art
                  partners if you want them.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-pine-light">03</span>
                <span>Your event runs, and — if it&apos;s through The Grove — a share of proceeds supports the Aspen Arts Club.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-3xl bg-cream/10 p-8">
            <p className="font-display text-2xl font-semibold">Ready to inquire?</p>
            <p className="text-sm leading-relaxed text-cream/80">
              The fastest way to check a date is through our VenueConnect listing. For anything
              custom — a full building buyout, multi-day activation, or press event — reach out
              through Aspen Daily News or the ThreeFifteen Instagram and we&apos;ll route it to
              the right person.
            </p>
            <a
              href="https://venues.expopass.com/venues/threefifteenaspen-hCpKz3xK4g"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-rust px-6 py-3.5 text-center text-sm font-semibold text-cream transition-colors hover:bg-rust-dark"
            >
              Check availability on VenueConnect ↗
            </a>
            <a
              href="https://www.instagram.com/threefifteenaspen"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/40 px-6 py-3.5 text-center text-sm font-semibold text-cream hover:bg-cream/10"
            >
              Message us on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
