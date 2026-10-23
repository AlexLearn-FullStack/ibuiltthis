import SectionHeader from "../section-header";
import ProductCard from "./product-card";
import EmptyState from "../empty-state";
import { Calendar, RocketIcon } from "lucide-react";
// import { getRecentlyLaunchedProducts } from "@/lib/products/products-select";

import { productsDemo as recentlyLaunchedProducts } from "@/constants";


export default async function RecentlyLaunchedProducts () {
  // const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();
  
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          description="Discover the latest products from our community"
          icon={RocketIcon}
        />

        {
          recentlyLaunchedProducts.length > 0
            ? (
              <div className="grid-wrapper">
                {
                  recentlyLaunchedProducts.map(
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
                message="No products launched in the last week. Check back soon for new launches."
                icon={Calendar}
              />
            )
        }
      </div>
    </section>
  )
}