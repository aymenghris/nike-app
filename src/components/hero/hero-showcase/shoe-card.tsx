/** biome-ignore-all lint/a11y/noStaticElementInteractions: I'll fix it later */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: I'll fix it later */

import { Image } from "@unpic/react"
import { cn } from "@/lib/utils"
import type { ShoeAsset } from "@/types/shoe-asset"

interface ShoeCardProps {
    mainShoeImg: string
    shoeAsset: ShoeAsset
    changeMainShoeImage: (shoeImage: string) => void
}

export const ShoeCard = ({
    mainShoeImg,
    shoeAsset,
    changeMainShoeImage,
}: ShoeCardProps) => {
    const handleClick = () => {
        if (mainShoeImg !== shoeAsset.image)
            changeMainShoeImage(shoeAsset.image)
    }

    return (
        <div
            className={cn(
                "cursor-pointer rounded-xl border-2 max-sm:flex-1",
                mainShoeImg === shoeAsset.image
                    ? "border-rose-400"
                    : "border-transparent",
            )}
            onClick={handleClick}
        >
            <div
                className={cn(
                    "flex items-center justify-center",
                    "rounded-xl",
                    "bg-[url('/backgrounds/dark-rose.svg')] bg-center bg-cover",
                    "max-sm:p-4 sm:size-40",
                )}
            >
                <Image
                    src={shoeAsset.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className="-rotate-25 object-contain"
                />
            </div>
        </div>
    )
}
