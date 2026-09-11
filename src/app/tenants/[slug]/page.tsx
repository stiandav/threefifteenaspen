import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { tenants, getTenant } from "@/data/tenants";
import TenantCard from "@/components/TenantCard";

export function generateStaticParams() {
  return tenants.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tenant = getTenant(slug);
  if (!tenant) return {};
  return {
    title: tenant.displayName,
    description: tenant.summary,
    openGraph: {
      title: `${tenant.displayName} | ThreeFifteen Aspen`,
      description: tenant.summary,
      images: [tenant.heroImage],
    },
  };
}

export default async function TenantPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tenant = getTenant(slug);
  if (!tenant) notFound();

  const others = tenants.filter((t) => t.slug !== tenant.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-black">
        <Image
          src={tenant.heroImage}
          alt={tenant.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-14 pt-32 sm:px-8">
          <Link href="/#directory" className="text-sm font-medium text-white/70 hover:text-white">
            ← Back to directory
          </Link>
          <p className="mt-4 text-xs font-medium uppercase tracking-widest text-white/60">
            {tenant.category}
          </p>
          <h1 className="mt-2 font-display text-4xl font-medium text-white sm:text-6xl">
            {tenant.displayName}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{tenant.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="prose-none">
            {tenant.body.map((p, i) => (
              <p key={i} className="mb-5 text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}

            {tenant.pullQuote && (
              <blockquote className="my-10 border-l-2 border-black pl-6">
                <p className="font-display text-2xl italic leading-snug text-black text-balance">
                  &ldquo;{tenant.pullQuote.text}&rdquo;
                </p>
                <cite className="mt-3 block text-xs font-medium not-italic uppercase tracking-widest text-muted">
                  {tenant.pullQuote.attribution}
                </cite>
              </blockquote>
            )}

            {tenant.gallery && tenant.gallery.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {tenant.gallery.map((g) => (
                  <div key={g.src} className="relative h-64 overflow-hidden border border-black/10">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="h-fit border border-black/10 bg-surface p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">Details</p>
            <dl className="mt-4 space-y-4">
              {tenant.suite && (
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted/70">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-black">315 E. Hyman Ave, {tenant.suite}</dd>
                </div>
              )}
              {tenant.hours && (
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted/70">
                    Hours
                  </dt>
                  <dd className="mt-1 space-y-0.5 text-sm text-black">
                    {tenant.hours.map((h) => (
                      <p key={h}>{h}</p>
                    ))}
                  </dd>
                </div>
              )}
              {tenant.facts?.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted/70">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-black">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-col gap-2 border-t border-black/10 pt-6">
              {tenant.website && (
                <a
                  href={tenant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black bg-black px-4 py-2.5 text-center text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
                >
                  {tenant.cta.label}
                </a>
              )}
              {tenant.instagram && (
                <a
                  href={tenant.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black px-4 py-2.5 text-center text-xs font-medium uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
                >
                  Follow on Instagram
                </a>
              )}
              {tenant.email && (
                <a
                  href={`mailto:${tenant.email}`}
                  className="text-center text-sm font-medium text-muted hover:text-black"
                >
                  {tenant.email}
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-black/10 bg-surface py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-medium text-black">Also in the building</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((t) => (
              <TenantCard key={t.slug} tenant={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
