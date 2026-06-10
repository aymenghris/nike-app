import { PRODUCTS } from "@/constants/products"
import { PopularProductHeader } from "./popular-product-header"
import { ProductGrid } from "./product-grid"

export const PopularProduct = () => {
    return (
        <section
            id="products"
            className="mx-auto max-w-360 px-8 py-12 max-sm:mt-12 sm:px-16 sm:py-24"
        >
            <PopularProductHeader />
            <ProductGrid products={PRODUCTS} />
        </section>
    )
}
