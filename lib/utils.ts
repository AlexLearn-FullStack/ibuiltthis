import z from "zod"
export { cn } from "cn"


export const productSchema = z.object({
  name: z
    .string()
    .min(3, { error: "Name must be at least 3 characters long!" })
    .max(75, { error: "Name must not exceed 75 characters!" }),
  slug: z
    .string()
    .min(3, { error: "Slug must be at least 3 characters!" })
    .max(100, "Slug must not exceed 100 characters!")
    .lowercase({ error: "Slug must be in lowercase only!" })
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      { error: "Slug can only contain lowercase letters, numbers, and single dashes.", }
    ),
  tagline: z
    .string()
    .max(150, { error: "Tagline must not exceed 150 characters!" })
    .optional(),
  description: z
    .string()
    .min(10, { error: "Description must be at least 15 characters long!" }),
  websiteUrl: z
    .string()
    .startsWith("https://", { error: "URL must start with 'https://'" })
    .min(12, { error: "Please provide a valid url" }),
  tags: z
    .string()
    .min(1, { error: "Tags are required" })
    .transform(
      (value) => value.split(",").map(
        (tag) => tag.trim().toLowerCase()
      )
    )
});