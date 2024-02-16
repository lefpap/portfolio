import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: {
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.enum(["active", "completed", "on-hold"]),
    technologies: z.array(z.string()),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    repo: z.string().optional(),
    live: z.string().optional(),
  },
});

const postsCollection = defineCollection({
  type: "content",
  schema: {
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    images: z.array(z.string()).optional(),
    status: z.enum(["draft", "published"]),
    tags: z.array(z.string()).min(1).max(5),
  },
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
