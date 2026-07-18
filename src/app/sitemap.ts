import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.pawanalakecampings.com/";

  const stays = ["privacy-policy", "safety-guidelines", "terms-of-services"];

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...stays.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
