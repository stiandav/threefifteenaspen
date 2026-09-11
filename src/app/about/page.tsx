import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Building",
  description:
    "The history of 315 E. Hyman Ave — from Su Casa and Eric's Bar, through Gravity Haus, to ThreeFifteen, downtown Aspen's reactivated community hub.",
};

const timeline = [
  {
    year: "For 28 years",
    title: "Su Casa & Eric's Bar",
    text: "The Casper family owned the building for nearly three decades, and it operated as Su Casa restaurant, Eric's Bar, Aspen Billiards, and a cigar bar — a genuine local hangout in the heart of downtown.",
  },
  {
    year: "2020",
    title: "A new owner",
    text: "Developer Mark Hunt bought the property for $10.6 million, ending the Casper family's long ownership.",
  },
  {
    year: "2022",
    title: "Su Casa & Eric's Bar close",
    text: "Both longtime tenants closed as the building prepared for a different kind of future — Unravel Coffee and Boat Tow opened in their place that same year.",
  },
  {
    year: "2023–2025",
    title: "Gravity Haus",
    text: "The building became a Gravity Haus outpost — a hospitality chain blending co-working, a hotel-style membership, and a coffee shop and restaurant. It closed at the end of summer, less than three years after taking over the space, after its investors' profitability timeline didn't line up with the high cost of doing business in Aspen.",
  },
  {
    year: "2026",
    title: "Reactivation",
    text: "Buckhorn Public Arts moved into the vacated offices and launched the Aspen Arts Club on July 1. Eddy's Marketplace, The Grove, Mischief Vintage, and Tattoo Aspen followed over the summer, with Aspen Daily News anchoring the building as its newsroom and publisher David Cook co-launching the ThreeFifteen brand.",
  },
  {
    year: "Sept. 17, 2026",
    title: "Community Open House",
    text: "The building throws open its doors for a free, all-ages open house — introducing the whole block, all at once, to the town it's meant to serve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/aerial-wagnerpark.jpg"
          alt="Aerial view of downtown Aspen and Wagner Park near 315 E. Hyman Ave"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-14 pt-32 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-pine-light">
            About
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-cream sm:text-6xl">
            A building that keeps coming back to being local.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="text-lg leading-relaxed text-ink-soft">
          315 E. Hyman Ave sits on one of the best blocks in downtown Aspen — between the Wheeler
          Opera House and Wagner Park, on a corner locals have gathered on for decades. Its story
          over the past few years is really the story of a lot of downtown Aspen: a beloved,
          scrappy local spot, bought out, reimagined for a different kind of customer, and then
          handed back — this time, run by the people who actually work there.
        </p>
      </section>

      <section className="bg-cream/40 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <ol className="relative space-y-10 border-l border-line pl-8">
            {timeline.map((t) => (
              <li key={t.title} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-rust" />
                <p className="text-xs font-semibold uppercase tracking-widest text-rust">
                  {t.year}
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-ink">{t.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <blockquote className="border-l-4 border-pine pl-6">
          <p className="font-display text-2xl italic leading-snug text-ink text-balance">
            &ldquo;Community is art as a whole.&rdquo;
          </p>
          <cite className="mt-3 block text-sm font-semibold not-italic uppercase tracking-wider text-ink-soft">
            Tim Sack, Executive Director, Buckhorn Public Arts — describing the reclaiming of
            &ldquo;an originally beloved community third space&rdquo;
          </cite>
        </blockquote>

        <div className="mt-14 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Come see it for yourself.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/#directory"
              className="rounded-full bg-pine px-6 py-3 text-sm font-semibold text-cream hover:bg-pine-dark"
            >
              Meet the tenants
            </Link>
            <Link
              href="/events"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:bg-sand"
            >
              See what&apos;s on
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
