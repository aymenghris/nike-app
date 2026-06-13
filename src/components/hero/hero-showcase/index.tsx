import { Image } from "@unpic/react"
import { useState } from "react"
import { DEFAULT_SHOE_IMAGE, SHOES_ASSETS } from "@/constants/hero"
import { cn } from "@/lib/utils"
import { ShoeCard } from "./shoe-card"

export const HeroShowcase = () => {
    const [mainShoeImg, setMainShoeImg] = useState(DEFAULT_SHOE_IMAGE)

    const changeMainShoeImage = (shoeImage: string) => {
        setMainShoeImg(shoeImage)
    }

    return (
        <div
            className={cn(
                "flex flex-1 flex-col items-center justify-center",
                "relative",
                "bg-rose-50",
                "max-xl:mb-32 max-xl:rounded-3xl max-xl:pt-24 max-xl:pb-40 xl:min-h-screen xl:py-0",
            )}
        >
            <Image
                src={mainShoeImg}
                alt="shoes collection"
                width={610}
                height={500}
                className={cn(
                    "relative z-10 h-auto max-w-1/2",
                    "-rotate-25 not-only-of-type:drop-shadow-2xl",
                    "object-contain",
                    "xl:max-w-full",
                )}
            />

            <div
                className={cn(
                    "absolute -bottom-12 left-1/2 z-20 w-full px-6",
                    "flex justify-center gap-4",
                    "-translate-x-1/2",
                    "sm:-bottom-20 sm:gap-6 xl:bottom-[-5%] xl:left-[10%] xl:w-auto xl:translate-x-0 xl:justify-start xl:px-0",
                )}
            >
                {SHOES_ASSETS.map((shoe) => (
                    <div key={shoe.id}>
                        <ShoeCard
                            mainShoeImg={mainShoeImg}
                            changeMainShoeImage={changeMainShoeImage}
                            shoeAsset={shoe}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
