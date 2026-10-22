import Link from "next/link"
import SectionHeader from "../section-header";
import { Button } from "../ui/button";
import { ArrowUpRight, Package, StarIcon } from "lucide-react";
import ProductCard from "../products/product-card";
import EmptyState from "../empty-state";

import { productsDemo as featuredProducts } from "@/constants";


export default function FeaturedProducts () {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            description="Top picks from our community this week"
            icon={StarIcon}
          />

          <Button
            variant="outline"
            className="hidden sm:flex"
          >
            <Link
              href="/explore"
              className="flex gap-2"
            >
              <span>View All</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
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