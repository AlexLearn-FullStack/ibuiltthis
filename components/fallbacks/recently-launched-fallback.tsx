import { RocketIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import SectionHeader from "../section-header";
import ProductCardFallback from "./product-card-fallback";



const RecentlyLaunchedFallback = () => (
  <section className="py-20">
    <div className="wrapper space-y-12">
      <SectionHeader
        title="Recently Launched"
        description="Discover the latest products from our community"
        icon={RocketIcon}
      />

      <Skeleton className="grid-wrapper">
        {
          [1,2,3].map(
            (i) => (
              <ProductCardFallback key={i} />
            )
          )
        }
      </Skeleton>
    </div>
  </section>
);


export default RecentlyLaunchedFallback;