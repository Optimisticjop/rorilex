import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rorilextechnicalsolutions.com";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
  ];
}
