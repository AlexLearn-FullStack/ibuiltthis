import { db } from "@/db";
import { products } from "@/db/schema";
import { and, desc, eq, gte } from "drizzle-orm";
import { connection } from "next/server";


export async function getAllApprovedProducts () {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.createdAt));

  return productsData;
};


export async function getFeaturedProducts () {
  "use cache";

  const productsdata = await db
    .select()
    .from(products)
    .where(
      and(
        eq(products.status, "approved"),
        eq(products.isFeatured, true)
      )
    )
    .orderBy(desc(products.voteCount))
    .limit(6);
  
  return productsdata;
}


export async function getRecentlyLaunchedProducts () {
  await connection(); // always get fresh data
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return db
    .select()
    .from(products)
    .where(
      and(
        eq(products.status, "approved"),
        gte(products.approvedAt, oneWeekAgo)
      )
    )
    .orderBy(desc(products.approvedAt));
}