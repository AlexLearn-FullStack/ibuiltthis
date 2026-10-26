import type { InferSelectModel } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  json,
  uniqueIndex,
  index,
  pgEnum,
  boolean,
} from "drizzle-orm/pg-core";


export const statusEnum = pgEnum("status", ["pending", "approved", "rejected"]);


export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    slug: varchar("slug", { length: 140 }).notNull(),
    tagline: varchar("tagline", { length: 200 }),
    description: text("description"),
    websiteUrl: text("website_url"),
    tags: json("tags").$type<string[]>(),
    isFeatured: boolean("is_featured").default(false),
    voteCount: integer("vote_count").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    approvedAt: timestamp("approved_at", { withTimezone: true }),
    status: statusEnum().default("pending").notNull(),
    submittedBy: varchar("submitted_by", { length: 120 }).default("anonymous"),

    // Clerk
    userId: varchar("user_id", { length: 255 }),
    organizationId: varchar("organization_id", { length: 255 }),
  },
  (table) => [
    uniqueIndex("products_slug_idx").on(table.slug),
    index("products_status_idx").on(table.status),
    index("products_organization_idx").on(table.organizationId),
  ]
);


export type Product = InferSelectModel<typeof products>;