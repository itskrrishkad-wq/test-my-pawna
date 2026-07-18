import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.pawanalakecampings.com/";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },

      // Block internal/system paths (important)
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/", // if you ever add admin panel
        ],
      },
    ],

    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
