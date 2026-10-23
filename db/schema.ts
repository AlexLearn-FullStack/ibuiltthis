import { pgTable, serial, varchar } from "drizzle-orm/pg-core";


export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    // .... Grab from video-kit
  }
)