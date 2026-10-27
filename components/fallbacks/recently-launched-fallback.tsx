import { RocketIcon } from "lucide-react";
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

      <div className="grid-wrapper">
        {
          [1,2,3].map(
            (i) => (
              <ProductCardFallback key={i} />
            )
          )
        }
      </div>
    </div>
  </section>
);


export default RecentlyLaunchedFallback;