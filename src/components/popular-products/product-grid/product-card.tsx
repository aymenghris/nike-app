import { Image } from "@unpic/react"
import { StarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/types/product.ts"

interface ProductCard extends Product {}

export const ProductCard = ({ src, name, rating, price }: ProductCard) => (
    <div className="flex w-full flex-1 flex-col max-sm:w-full">
        <div
            className={cn(
                "flex items-center justify-center",
                "size-55",
                "rounded-xl",
                "bg-[url('/products/product-background.svg')] bg-center bg-cover",
            )}
        >
            <Image
                src={src}
                alt={name}
                height={240}
                width={135}
                className="-rotate-12 object-contain drop-shadow-2xl drop-shadow-rose-500/30"
            />
        </div>

        <div className="mt-8 flex justify-start gap-2.5">
            <StarIcon className="fill-yellow-500 text-yellow-500" />
            <span className="font-montserrat text-neutral-500 text-xl leading-normal">
                ({rating.toFixed(1)})
            </span>
        </div>

        <h3 className="mt-2 font-palanquin font-semibold text-2xl capitalize leading-normal">
            {name}
        </h3>

        <p className="mt-2 font-montserrat font-semibold text-rose-400 text-xl leading-normal">
            {price}
        </p>
    </div>
)
