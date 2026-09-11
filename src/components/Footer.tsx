import Link from "next/link";
import { tenants } from "@/data/tenants";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">threefifteen</p>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-white/70">
              News. Art. Coffee. Food. Vintage. Tattoos. Ideas. Community. Under one roof in
              downtown Aspen.
            </p>
            <a
              href="https://www.instagram.com/threefifteenaspen"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium uppercase tracking-wide text-white hover:text-white/70"
            >
              @threefifteenaspen ↗
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">Visit</p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              315 E. Hyman Ave
              <br />
              Aspen, CO 81611
              <br />
              Between the Wheeler Opera House &amp; Wagner Park
            </p>
            <a
              href="https://www.google.com/maps/place/315+E+Hyman+Ave,+Aspen,+CO+81611"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block h-32 w-full overflow-hidden border border-white/20"
              aria-label="Open 315 E. Hyman Ave in Google Maps"
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-106.8206%2C39.1897%2C-106.8146%2C39.1927&layer=mapnik&marker=39.1912%2C-106.8176"
                title="Map of 315 E. Hyman Ave, Aspen, CO"
                className="map-mono pointer-events-none h-full w-full grayscale"
                loading="lazy"
              />
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">
              Who&apos;s here
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {tenants.map((t) => (
                <li key={t.slug}>
                  <Link href={`/tenants/${t.slug}`} className="text-white/80 hover:text-white">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">Site</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-white/80 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-white/80 hover:text-white">
                  Book the space
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white">
                  Building history
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ThreeFifteen Aspen. Independently run by the tenants of 315 E. Hyman Ave.</p>
          <p>Photos courtesy of @threefifteenaspen and the businesses of the building.</p>
        </div>
      </div>
    </footer>
  );
}
