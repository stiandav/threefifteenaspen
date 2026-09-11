import Link from "next/link";
import { tenants } from "@/data/tenants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">
              three<span className="text-rust">fifteen</span>
            </p>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-paper/70">
              News. Art. Coffee. Food. Vintage. Tattoos. Ideas. Community. — under one roof in
              downtown Aspen.
            </p>
            <a
              href="https://www.instagram.com/threefifteenaspen"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-rust hover:text-rust/80"
            >
              @threefifteenaspen ↗
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/50">
              Visit
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              315 E. Hyman Ave
              <br />
              Aspen, CO 81611
              <br />
              Between the Wheeler Opera House &amp; Wagner Park
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/50">
              Who&apos;s here
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {tenants.map((t) => (
                <li key={t.slug}>
                  <Link href={`/tenants/${t.slug}`} className="text-paper/80 hover:text-rust">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/50">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-paper/80 hover:text-rust">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-paper/80 hover:text-rust">
                  Book the space
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-paper/80 hover:text-rust">
                  Building history
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ThreeFifteen Aspen. Independently run by the tenants of 315 E. Hyman Ave.</p>
          <p>Photos courtesy of @threefifteenaspen and the businesses of the building.</p>
        </div>
      </div>
    </footer>
  );
}
