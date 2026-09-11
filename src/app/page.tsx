import Image from "next/image";
import Link from "next/link";
import { tenants } from "@/data/tenants";
import TenantCard from "@/components/TenantCard";

const tags = ["News", "Art", "Coffee", "Food", "Vintage", "Tattoos", "Ideas", "Community"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-black">
        <Image
          src="/images/building-exterior-snow.jpg"
          alt="The brick, arched facade of 315 E. Hyman Ave in downtown Aspen, with Aspen Mountain behind it in winter"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            315 E. Hyman Ave, Aspen, Colorado
          </p>
          <h1 className="mt-3 font-display text-6xl italic tracking-tight text-white sm:text-8xl">
            threefifteen
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
            {tags.map((t, i) => (
              <span key={t} className="flex items-center text-xs font-medium uppercase tracking-widest text-white/80">
                {t}
                {i < tags.length - 1 && <span className="ml-3 text-white/40">·</span>}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            A historic downtown Aspen building, reactivated: news, art, coffee, food, vintage
            goods, and tattoos, all sharing one address between the Wheeler Opera House and
            Wagner Park.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#directory"
              className="border border-white bg-white px-6 py-3 text-xs font-medium uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
            >
              See who&apos;s here
            </Link>
            <Link
              href="/book"
              className="border border-white px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              Book the space
            </Link>
          </div>
        </div>
      </section>

      {/* Address strip */}
      <div className="border-b border-black">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 text-sm sm:px-8">
          <p className="text-black">
            <span className="font-medium">315 E. Hyman Ave</span> · Aspen, CO 81611 · Between the
            Wheeler Opera House &amp; Wagner Park
          </p>
          <a
            href="https://www.instagram.com/threefifteenaspen"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:decoration-black"
          >
            @threefifteenaspen ↗
          </a>
        </div>
      </div>

      {/* Intro / lede */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="font-display text-2xl leading-relaxed text-black sm:text-3xl text-balance">
          Come explore the newly activated 315 E. Hyman. Meet the people and businesses who call
          it home, and help write the next chapter for a longtime downtown gathering place.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
          This block spent years as Su Casa and Eric&apos;s Bar, then a hotel chain&apos;s
          Colorado outpost. Today it&apos;s six independent businesses sharing one roof, run by
          the people of Aspen, for the people of Aspen.{" "}
          <Link href="/about" className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:decoration-black">
            Read the building&apos;s story →
          </Link>
        </p>
      </section>

      {/* Directory */}
      <section id="directory" className="scroll-mt-20 bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              The directory
            </p>
            <h2 className="mt-2 font-display text-4xl font-medium text-black sm:text-5xl">
              Six businesses. One address.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every tenant at 315 E. Hyman operates independently. This is simply the map. Click
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
          <div className="grid overflow-hidden border border-black bg-black text-white lg:grid-cols-2">
            <div className="relative order-2 aspect-[2250/2813] w-full bg-black lg:order-1">
              <Image
                src="/images/event-flyer.jpg"
                alt="ThreeFifteen community open house flyer for Thursday, September 17, 4 to 8pm"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="order-1 flex flex-col justify-center gap-5 p-8 sm:p-12 lg:order-2">
              <p className="text-xs font-medium uppercase tracking-widest text-white/60">
                Community open house
              </p>
              <h2 className="font-display text-3xl font-medium sm:text-4xl">
                Thursday, Sept. 17 · 4–8pm
              </h2>
              <p className="text-base leading-relaxed text-white/80">
                Free and open to all. Meet the businesses of ThreeFifteen in one evening:
                libations, bites by Eddy&apos;s, live music, and art, hosted jointly by Aspen
                Daily News, Aspen Arts Club, Eddy&apos;s Marketplace, Mischief Vintage, Tattoo
                Aspen, and The Grove.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/events"
                  className="border border-white bg-white px-6 py-3 text-xs font-medium uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
                >
                  Event details
                </Link>
                <a
                  href="https://www.instagram.com/threefifteenaspen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
                >
                  RSVP on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book the space */}
      <section className="border-y border-black bg-black text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/60">
              Private events
            </p>
            <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">
              Host your next event under one very Aspen roof.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              The courtyard, The Grove&apos;s community room, and the building&apos;s upper-level
              studios are all available to book, for a launch, a reception, a holiday party, or a
              full evening buyout of the block. Proceeds from Grove bookings help fund the Aspen
              Arts Club&apos;s resident artists.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href="/book"
              className="border border-white bg-white px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
            >
              Start a booking inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="font-display text-3xl italic leading-snug text-black sm:text-4xl text-balance">
          &ldquo;From being a local&apos;s favorite hangout block, to being privatized, and back
          again to being local. Taking our town back, if only for a little while.&rdquo;
        </p>
        <p className="mt-6 text-xs font-medium uppercase tracking-widest text-muted">
          A neighbor, on the reopening of 315 E. Hyman
        </p>
      </section>
    </>
  );
}
