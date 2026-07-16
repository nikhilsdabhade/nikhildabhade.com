import { MetadataRoute } from "next";
import { blogs } from "./blogs/constants";

export default function sitemap(): MetadataRoute.Sitemap {
return [
  {
    url: "https://nikhildabhade.com",
    lastModified: new Date(),
    priority: 1,
  },
  {
    url: "https://nikhildabhade.com/blogs",
    lastModified: new Date(),
    priority: 0.9,
  },
  ...blogs.map((blog) => ({
    url: `https://nikhildabhade.com/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    priority: 0.8,
  })),
];
}