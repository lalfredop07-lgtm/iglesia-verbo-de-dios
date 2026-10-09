import type { MetadataRoute } from "next";
import { resolveMetadataBase } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  const base = resolveMetadataBase().origin;

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
