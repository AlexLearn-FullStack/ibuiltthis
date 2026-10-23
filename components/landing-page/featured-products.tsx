import Link from "next/link"
import SectionHeader from "../section-header";
import { buttonVariants } from "../ui/button";
import { ArrowUpRight, Package, StarIcon } from "lucide-react";
import ProductCard from "../products/product-card";
import EmptyState from "../empty-state";
// import { getFeaturedProducts } from "@/lib/products/products-select";

import { productsDemo as featuredProducts } from "@/constants";


export default async function FeaturedProducts () {
  // const featuredProducts = await getFeaturedProducts();
  
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            description="Top picks from our community this week"
            icon={StarIcon}
          />

          <Link
            href="/explore"
            className={buttonVariants({
              variant: "outline",
              className: "hidden sm:flex gap-2 border-border!",
            })}
          >
            <span>View All</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>


        {
          featuredProducts.length > 0
            ? (
              <div className="grid-wrapper">
                {
                  featuredProducts.map(
                    (product) => (
                      <ProductCard
                        key={ product.id }
                        { ...product }
                      />
                    )
                  )
                }
              </div>
            )
            : (
              <EmptyState
                message="No featured products yet. Check back later."
                icon={Package}
              />
            )
        }
      </div>
    </section>
  )
}