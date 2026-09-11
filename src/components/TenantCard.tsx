import Image from "next/image";
import Link from "next/link";
import type { Tenant } from "@/data/tenants";

export default function TenantCard({ tenant }: { tenant: Tenant }) {
  return (
    <Link
      href={`/tenants/${tenant.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-cream shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={tenant.cardImage}
          alt={tenant.cardImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
          {tenant.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-semibold text-ink">{tenant.displayName}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{tenant.tagline}</p>
        <span className="mt-auto pt-3 text-sm font-semibold text-rust group-hover:text-rust-dark">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
