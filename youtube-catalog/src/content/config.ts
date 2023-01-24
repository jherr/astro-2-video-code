import { z, defineCollection } from "astro:content";

// A Schema to be shared by all thumbnails
const thumbnailSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

const videoSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).optional(),
    privacyStatus: z.enum(["public"]),
    short: z.boolean(),
    thumbnails: z.object({
      default: thumbnailSchema,
      medium: thumbnailSchema,
      high: thumbnailSchema,
      standard: thumbnailSchema,
      maxres: thumbnailSchema.optional(),
    }),
  }),
});

export const collections = {
  videos: videoSchema,
};
