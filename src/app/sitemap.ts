import type { MetadataRoute } from "next";
import { tenants } from "@/data/tenants";

const base = "https://threefifteenaspen.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/events", "/book"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const tenantRoutes = tenants.map((t) => ({
    url: `${base}/tenants/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...tenantRoutes];
}
