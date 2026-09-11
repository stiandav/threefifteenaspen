import Image from "next/image";
import Link from "next/link";
import type { Tenant } from "@/data/tenants";

export default function TenantCard({ tenant }: { tenant: Tenant }) {
  return (
    <Link
      href={`/tenants/${tenant.slug}`}
      className="group flex flex-col border border-black/10 bg-white transition-colors hover:border-black"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={tenant.cardImage}
          alt={tenant.cardImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-black/10 p-5">
        <p className="text-[11px] font-medium uppercase tracking-widest text-accent">
          {tenant.category}
        </p>
        <h3 className="font-display text-xl font-medium text-black">{tenant.displayName}</h3>
        <p className="text-sm leading-relaxed text-muted">{tenant.tagline}</p>
        <span className="mt-auto pt-3 text-xs font-medium uppercase tracking-widest text-black group-hover:text-accent">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
