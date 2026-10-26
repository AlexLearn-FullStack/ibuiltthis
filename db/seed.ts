import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import { allProducts } from "./data";

const databaseUrl = process.env.DATABASE_URL;


async function main() {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const db = drizzle(databaseUrl);
  console.log("🌱 Seeding database...");

  await db.delete(products);
  console.log("✅ Cleared existing products");

  await db.insert(products).values(
    allProducts.map((product) => ({
      name: product.name,
      slug: product.slug,
      tagline: product.tagline,
      description: product.description,
      websiteUrl: product.websiteUrl,
      tags: product.tags,
      isFeatured: product.isFeatured ?? false,
      voteCount: product.voteCount ?? 0,
      createdAt: product.createdAt,
      approvedAt: product.approvedAt,
      status: product.status,
      submittedBy: product.submittedBy,
    })),
  );

  const seededProducts = await db
    .select({
      name: products.name,
      slug: products.slug,
      voteCount: products.voteCount,
    })
    .from(products);
  console.log(
    `\n🎉 Successfully seeded ${allProducts.length} products. Database now contains ${seededProducts.length} products.`,
  );

  console.log("\n📦 Products in database:");
  seededProducts.forEach((product) => {
    console.log(
      `  - ${product.name} (${product.slug}) - ${product.voteCount ?? 0} votes`,
    );
  });
}

function handleSeedError(error: unknown) {
  console.error("❌ Error seeding database:", error);
  process.exitCode = 1;
}

main().catch(handleSeedError);