import { getAllApprovedProducts } from "@/lib/products/products-select";


export const generateStaticParams = async () => {
  const products = await getAllApprovedProducts();
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
  
  return (
    <main>
      <h1>Product: { slug }</h1>
    </main>
  )
}