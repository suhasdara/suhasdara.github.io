import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    startDates: z.array(z.date().transform((date) => date.toISOString().split('T')[0])),
    endDates: z.array(z.date().transform((date) => date.toISOString().split('T')[0])),
    languages: z.array(z.string()),
    tools: z.array(z.string()).optional().default([]),
    team: z.array(z.string()).optional().default([]),
    slug: z.string().optional(),
    repository: z.string().optional(),
    projectLink: z.string().optional(),
    paperSlug: z.string().optional(),
    postType: z.literal('project'),
    image: z.string(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyLink: z.string().optional(),
    where: z.string().optional(),
    startDates: z.array(z.date().transform((date) => date.toISOString().split('T')[0])),
    endDates: z.array(z.date().transform((date) => date.toISOString().split('T')[0])),
    languages: z.array(z.string()),
    tools: z.array(z.string()).optional().default([]),
    slug: z.string().optional(),
    postType: z.literal('experience'),
    image: z.string(),
  }),
});

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string().optional(),
    tags: z.array(z.string()),
    postType: z.literal('blog'),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    image: z.string().optional(),
    hobbies: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      link: z.string().optional(),
    })).optional().default([]),
    postType: z.literal('about'),
  }),
});

export const collections = {
  projects,
  experience,
  blogs,
  about,
};