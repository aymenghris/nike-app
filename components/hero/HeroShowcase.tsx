import { heroShoes } from '../../constants.ts'
import { ShoeCard } from './ShoeCard.tsx'
import { useState } from 'react'

export const HeroShowcase = () => {
    const [heroImg, setHeroImg] = useState(heroShoes[0].shoe)
    const changeHeroImage = (shoeImages: string) => {
        setHeroImg(shoeImages)
    }

    return (
        <div className="bg-primary relative flex flex-1 items-center justify-center max-xl:py-40 xl:min-h-screen">
            <img
                src={heroImg}
                alt="shoes collection"
                width={610}
                height={500}
                className="relative z-10 object-contain"
            />
            <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
                {heroShoes.map((shoeImages, index) => (
                    <div key={index}>
                        <ShoeCard
                            heroImg={heroImg}
                            changeHeroImage={changeHeroImage}
                            shoeImages={shoeImages}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
