// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://yuuma.id", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://yuuma.id/story", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://yuuma.id/products", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}