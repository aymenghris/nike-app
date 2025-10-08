import type { FC } from 'react'
import { assetsPath } from '../../constants.ts'

interface ProductCard {
    src: string
    name: string
    rating: number
    price: string
}

export const ProductCard: FC<ProductCard> = ({ src, name, rating, price }) => {
    const { star } = assetsPath.popularProduct
    return (
        <div className="flex w-full flex-1 flex-col max-sm:w-full">
            <img src={src} alt={name} className="size-[280px]" />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" />
                <span className="font-montserrat text-slate-gray text-xl leading-normal">
                    ({rating})
                </span>
            </div>
            <h3 className="font-palanquin mt-2 text-2xl leading-normal font-semibold">
                {name}
            </h3>
            <p className="font-montserrat text-coral-red mt-2 text-xl leading-normal font-semibold">
                {price}
            </p>
        </div>
    )
}
