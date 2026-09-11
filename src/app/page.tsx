import Image from "next/image";
import Link from "next/link";
import { tenants } from "@/data/tenants";
import TenantCard from "@/components/TenantCard";

const tags = [
  "News",
  "Art",
  "Coffee",
  "Food",
  "Vintage",
  "Tattoos",
  "Ideas",
  "Community",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/building-courtyard-hero.jpg"
          alt="The sunlit brick courtyard of ThreeFifteen at 315 E. Hyman Ave, Aspen, with Aspen Mountain behind it"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8">
          <p className="font-script text-3xl text-pine-light sm:text-4xl">Meet us at</p>
          <h1 className="mt-1 font-display text-6xl font-semibold tracking-tight text-cream sm:text-8xl">
            three<span className="text-rust">fifteen</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
            {tags.map((t, i) => (
              <span key={t} className="flex items-center text-sm font-medium uppercase tracking-wider text-cream/85">
                {t}
                {i < tags.length - 1 && <span className="ml-3 text-rust">·</span>}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90">
            A historic downtown Aspen building, reactivated — news, art, coffee, food, vintage
            goods, and tattoos, all sharing one address between the Wheeler Opera House and
            Wagner Park.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#directory"
              className="rounded-full bg-rust px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-rust-dark"
            >
              See who&apos;s here
            </Link>
            <Link
              href="/book"
              className="rounded-full border border-cream/40 bg-cream/5 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/15"
            >
              Book the space
            </Link>
          </div>
        </div>
      </section>

      {/* Address strip */}
      <div className="border-b border-line bg-sand/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 text-sm text-ink-soft sm:px-8">
          <p>
            <span className="font-semibold text-ink">315 E. Hyman Ave</span> · Aspen, CO 81611 ·
            Between the Wheeler Opera House &amp; Wagner Park
          </p>
          <a
            href="https://www.instagram.com/threefifteenaspen"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            @threefifteenaspen ↗
          </a>
        </div>
      </div>

      {/* Intro / lede */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="font-display text-2xl leading-relaxed text-ink sm:text-3xl text-balance">
          Come explore the newly activated 315 E. Hyman — meet the people and businesses who call
          it home, and help write the next chapter for a longtime downtown gathering place.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          This block spent years as Su Casa and Eric&apos;s Bar, then a hotel chain&apos;s
          Colorado outpost. Today it&apos;s six independent businesses sharing one roof — run by
          the people of Aspen, for the people of Aspen.{" "}
          <Link href="/about" className="font-semibold text-pine hover:text-pine-dark">
            Read the building&apos;s story →
          </Link>
        </p>
      </section>

      {/* Directory */}
      <section id="directory" className="scroll-mt-20 bg-cream/40 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-rust">
              The directory
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Six businesses. One address.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Every tenant at 315 E. Hyman operates independently — this is simply the map. Click
              through for hours, founders, and how to visit each one.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tenants.map((t) => (
              <TenantCard key={t.slug} tenant={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 overflow-hidden rounded-3xl border border-line bg-ink text-cream lg:grid-cols-2">
            <div className="relative order-2 min-h-[320px] lg:order-1">
              <Image
                src="/images/event-flyer.jpg"
                alt="ThreeFifteen community open house flyer for Thursday, September 17, 4-8pm"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="order-1 flex flex-col justify-center gap-5 p-8 sm:p-12 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-pine-light">
                Community open house
              </p>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Thursday, Sept. 17 · 4–8pm
              </h2>
              <p className="text-base leading-relaxed text-cream/80">
                Free and open to all. Meet the businesses of ThreeFifteen in one evening —
                libations, bites by Eddy&apos;s, live music, and art, hosted jointly by Aspen
                Daily News, Aspen Arts Club, Eddy&apos;s Marketplace, Mischief Vintage, Tattoo
                Aspen, and The Grove.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/events"
                  className="rounded-full bg-rust px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-rust-dark"
                >
                  Event details
                </Link>
                <a
                  href="https://www.instagram.com/threefifteenaspen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
                >
                  RSVP on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book the space */}
      <section className="border-y border-line bg-pine text-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pine-light">
              Private events
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
              Host your next event under one very Aspen roof.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85">
              The courtyard, The Grove&apos;s community room, and the building&apos;s upper-level
              studios are all available to book — for a launch, a reception, a holiday party, or
              a full evening buyout of the block. Proceeds from Grove bookings help fund the
              Aspen Arts Club&apos;s resident artists.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href="/book"
              className="rounded-full bg-rust px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-rust-dark"
            >
              Start a booking inquiry
            </Link>
            <a
              href="https://venues.expopass.com/venues/threefifteenaspen-hCpKz3xK4g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-cream/85 underline decoration-cream/40 underline-offset-4 hover:text-cream"
            >
              View listing on VenueConnect ↗
            </a>
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="font-display text-3xl italic leading-snug text-ink sm:text-4xl text-balance">
          &ldquo;From being a local&apos;s favorite hangout block, to being privatized, and back
          again to being local — taking our town back, if only for a little while.&rdquo;
        </p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-ink-soft">
          A neighbor, on the reopening of 315 E. Hyman
        </p>
      </section>
    </>
  );
}
