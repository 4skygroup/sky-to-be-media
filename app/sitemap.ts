import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://skytobemedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about/", "/careers/", "/contact/"].map((chemin) => ({
    url: `${baseUrl}${chemin || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: chemin ? 0.5 : 1,
  }));
}
