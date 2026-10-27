import { Card, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";


const ProductCardFallback = () => (
  <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-45 rounded-xl">
    <CardHeader className="flex-1">
      <div className="flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-40 rounded-sm" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full rounded-sm" />
            <Skeleton className="h-4 w-3/4 rounded-sm" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 shrink-0">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-4 w-6 rounded-sm" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>
    </CardHeader>
    <CardFooter>
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-16 rounded-3xl" />
        <Skeleton className="h-6 w-20 rounded-3xl" />
        <Skeleton className="h-6 w-14 rounded-3xl" />
      </div>
    </CardFooter>
  </Card>
);


export default ProductCardFallback;