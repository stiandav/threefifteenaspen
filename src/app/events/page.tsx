import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "What's happening at ThreeFifteen — the September 17 community open house, and the recurring programming that keeps 315 E. Hyman busy year-round.",
};

const recurring = [
  {
    title: "Aspen Arts Club open studios & workshops",
    cadence: "Weekly",
    detail:
      "Drawing, dance, music, and painting sessions led by resident artists — open to the public, no experience required. Check aspenartsclub.org for the current schedule.",
  },
  {
    title: "The Grove community room",
    cadence: "Rotating",
    detail:
      "Yoga, comedy nights, flamenco dancing, and other public programming in the lower-level community room — proceeds support the Aspen Arts Club.",
  },
  {
    title: "Eddy's happy hour",
    cadence: "Thursday–Monday, 4–6pm",
    detail: "Cocktails, beer, and wine on the shared courtyard patio at Eddy's Kitchen.",
  },
  {
    title: "Tattoo Aspen guest residencies",
    cadence: "Seasonal, 5–7 day rotations",
    detail:
      "Roughly seventeen visiting artists cycle through each season. See the current lineup and request an appointment at tattooaspen.com.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/art-jamison-menard.jpg"
          alt="A resident artist with his artwork at an Aspen Arts Club event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-14 pt-32 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-pine-light">
            Events
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-cream sm:text-6xl">
            Things happening at 315.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 overflow-hidden rounded-3xl border border-line bg-ink text-cream lg:grid-cols-2">
          <div className="relative order-2 min-h-[420px] lg:order-1">
            <Image
              src="/images/event-flyer.jpg"
              alt="ThreeFifteen community open house flyer for Thursday, September 17, 4-8pm, featuring Aspen Daily News, Tattoo Aspen, Mischief, Eddy's, and The Grove"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="order-1 flex flex-col justify-center gap-5 p-8 sm:p-12 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-pine-light">
              Featured · Free &amp; open to all
            </p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Community Open House
            </h2>
            <p className="text-lg font-semibold text-cream">Thursday, September 17 · 4–8pm</p>
            <p className="text-base leading-relaxed text-cream/80">
              Come explore the newly activated 315 E. Hyman and meet the people and businesses
              who call it home. Libations, bites by Eddy&apos;s, live music, and art — jointly
              hosted by every tenant in the building to celebrate a new chapter for a longtime
              downtown gathering place.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-cream/70">
              <li className="rounded-full border border-cream/30 px-3 py-1">Aspen Daily News</li>
              <li className="rounded-full border border-cream/30 px-3 py-1">Aspen Arts Club</li>
              <li className="rounded-full border border-cream/30 px-3 py-1">Eddy&apos;s Marketplace</li>
              <li className="rounded-full border border-cream/30 px-3 py-1">Mischief Vintage</li>
              <li className="rounded-full border border-cream/30 px-3 py-1">Tattoo Aspen</li>
              <li className="rounded-full border border-cream/30 px-3 py-1">The Grove</li>
            </ul>
            <a
              href="https://www.instagram.com/threefifteenaspen"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit rounded-full bg-rust px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-rust-dark"
            >
              RSVP / details on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream/40 py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink">Happening regularly</h2>
          <p className="mt-3 max-w-xl text-base text-ink-soft">
            Beyond one-off events, the building runs on a weekly rhythm set by its tenants.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {recurring.map((r) => (
              <div key={r.title} className="rounded-2xl border border-line bg-cream p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-rust">
                  {r.cadence}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <h2 className="font-display text-3xl font-semibold text-ink">
          Want to host something here?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          The courtyard and The Grove&apos;s community room are both available to book for
          private events, launches, and receptions.
        </p>
        <Link
          href="/book"
          className="mt-6 inline-block rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-pine-dark"
        >
          Learn about booking the space
        </Link>
      </section>
    </>
  );
}
