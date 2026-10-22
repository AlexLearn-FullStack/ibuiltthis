import Link from "next/link";
import { StarIcon } from "lucide-react";
import type { ProductDemo } from "@/types";
import { Badge } from "../ui/badge";
import {
  Card, CardHeader,
  CardTitle, CardDescription,
  CardFooter
} from "../ui/card";
import VotingBtns from "./voting-btns";


export default function ProductCard ({ ...product }: ProductDemo) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card
        className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-45 rounded-xl"
      >
        <CardHeader className="flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors capitalize">
                  { product.name }
                </CardTitle>
                {
                  product.isFeatured
                    && (
                      <Badge className="gap-1 bg-primary text-primary-foreground">
                        <StarIcon className="size-3 fill-current" />
                        <span>Featured</span>
                      </Badge>
                    )
                }
              </div>
              <CardDescription>{ product.description }</CardDescription>
            </div>
            
            <VotingBtns
              voteCount={ product.votes }
            />

          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex items-center gap-2">
            {
              product.tags.map(
                (tag) => (
                  <Badge variant="secondary" key={ tag }>
                    { tag }
                  </Badge>
                )
              )
            }
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}