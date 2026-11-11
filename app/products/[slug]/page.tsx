/** biome-ignore-all lint/suspicious/noImplicitAnyLet: initial */
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Product } from "@/db/schema";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import SectionHeader from "@/components/section-header";
import VotingBtns from "@/components/products/voting-btns";
import {
  getAllApprovedProducts,
  getProductBySlug,
} from "@/lib/products/products-select";
import {
  ArrowLeftIcon, CalendarIcon,
  ExternalLinkIcon, SparkleIcon,
  StarIcon, UserIcon
} from "lucide-react";



export const instant = false;

const EMPTY_CATALOG_SLUG = "__empty_catalog__";

export const generateStaticParams = async () => {
  const products = await getAllApprovedProducts();
  if (products.length === 0) {
    return [{ slug: EMPTY_CATALOG_SLUG }];
  }

  return products.map(
    (product) => ({
      slug: product.slug
    })
  )
}


export default async function ProductPage ({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  if (slug === EMPTY_CATALOG_SLUG) return notFound();

  let product;
  try {
    product = await getProductBySlug(slug);
  }
  catch (e) {
    console.error(e)
    return (
      <div className="wrapper py-16" role="alert">
        <p className="text-muted-foreground">
          Could not fetch this product at the moment. Please try again later.
        </p>
        <a
          href={`/products/${encodeURIComponent(slug)}`}
          className={buttonVariants({ variant: "outline", className: "mt-4 border border-border!" })}
        >
          Try again
        </a>
      </div>
    );
  }

  if (!product) return notFound();

  const {
    name, description, id,
    tagline, websiteUrl,
    tags, voteCount, isFeatured,
    createdAt, submittedBy
  } = product as Product;

  const _meta = [
    {
      label: "launched:",
      value: new Date(
        createdAt?.toISOString() ?? ""
      ).toLocaleDateString(),
      icon: CalendarIcon
    },
    {
      label: "Submitted by:",
      value: submittedBy,
      icon: UserIcon
    }
  ]
  
  return (
    <div className="py-16">
      <div className="wrapper">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="mb-6">
                  <SectionHeader
                    title={name}
                    icon={StarIcon}
                    description={tagline ?? ""}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {
                    tags?.map(
                      (tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                        >{ tag }</Badge>
                      )
                    )
                  }
                </div>
              </div>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                { description }
              </p>
            </div>

            <div className="border rounded-lg p-6 bg-primary/10">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              
              <div className="space-y-3">
                {
                  _meta.map(
                    ({label, value, icon: Icon}) => (
                      <div key={label} className="flex items-center gap-3 text-sm">
                        {
                          Icon && <Icon className="size-4 text-muted-foreground"/>
                        }

                        <span className="text-muted-foreground">{ label }</span>
                        <span className="font-medium">{ value }</span>
                      </div>
                    )
                  )
                }
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="border rounded-lg p-6 bg-background">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Support this project
                  </p>
                  <VotingBtns
                    productId={ id }
                    voteCount={ voteCount }
                  />
                </div>

                {
                  isFeatured && (
                    <div className="pt-6 border-t">
                      <Badge
                        className="w-full justify-center py-2"
                      >
                        <SparkleIcon className="fill-primary text-primary" />
                        Featured
                      </Badge>
                    </div>
                  )
                }
              </div>

              {
                websiteUrl && (
                  <a
                    href={ websiteUrl }
                    className={buttonVariants({
                      variant: "outline",
                      className: "w-full rounded-lg border border-border!"
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                    <ExternalLinkIcon className="size-4 ml-2" />
                  </a>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}