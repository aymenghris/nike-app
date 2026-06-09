import { Image } from "@unpic/react"
import { useState } from "react"
import { DEFAULT_SHOE_IMAGE, SHOES_ASSETS } from "@/constants/hero"
import { ShoeCard } from "./shoe-card"

export const HeroShowcase = () => {
    const [mainShoeImg, setMainShoeImg] = useState(DEFAULT_SHOE_IMAGE)

    const changeMainShoeImage = (shoeImage: string) => {
        setMainShoeImg(shoeImage)
    }

    return (
        <div className="relative flex flex-1 items-center justify-center bg-rose-50 max-xl:py-40 xl:min-h-screen">
            <Image
                src={mainShoeImg}
                alt="shoes collection"
                width={610}
                height={500}
                className="relative z-10 -rotate-25 object-contain"
            />

            <div className="absolute bottom-[-5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
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
