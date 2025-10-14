import clsx from 'clsx'
import { products } from '../../constants.ts'
import { ProductCard } from './ProductCard.tsx'

export const PopularProduct = () => {
    return (
        <section
            id="products"
            className="c-padding c-max-container max-sm:mt-12"
        >
            <div className="flex flex-col justify-start gap-5">
                <h2 className="font-palanquin text-c-4xl font-bold capitalize">
                    our <span className="text-coral-red"> popular </span>
                    products
                </h2>
                <p className="font-montserrat text-slate-gray mt-2 max-lg:max-w-lg">
                    Indulge in exceptional quality and contemporary style from
                    our exclusive collections. Find the perfect blend of design,
                    comfort, and lasting value.
                </p>
            </div>
            <div
                className={clsx(
                    'grid grid-cols-1 gap-14',
                    'mt-16',
                    'sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4'
                )}
            >
                {products.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
}
