import { cn } from "@/lib/utils.ts"
import type { Product } from "@/types/product"
import { ProductCard } from "./product-card"

interface ProductGridProps {
    products: Product[]
}

export const ProductGrid = ({ products }: ProductGridProps) => (
    <div
        className={cn(
            "mt-16 grid grid-cols-1 gap-14",
            "sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
        )}
    >
        {products.map((product) => (
            <ProductCard key={product.name} {...product} />
        ))}
    </div>
)
