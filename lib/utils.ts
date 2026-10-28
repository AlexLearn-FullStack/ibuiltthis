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
    .min(15, { error: "Description must be at least 15 characters long!" }),
  websiteUrl: z
    .url({ error: "Please enter a valid URL" })
    .startsWith("https://", { error: "URL must start with 'https://'" })
    .min(12, { error: "URL too short!" }),
  tags: z
    .string()
    .min(2, { error: "Tags must be at least 2 characters long!" })
    .transform(
      (value) => [
        ...new Set(
          value
            .split(",")
            .map((tag) => tag.trim().toLowerCase())
            .filter(Boolean)
        ),
      ]
    )
    .refine((tags) => tags.length > 0, { error: "Tags are required" })
});