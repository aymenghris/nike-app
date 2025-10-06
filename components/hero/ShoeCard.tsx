import type { FC } from 'react'
import clsx from 'clsx'

interface ShoeCardProps {
    heroImg: string
    changeHeroImage: (shoe: string) => void
    shoeImages: {
        shoe: string
        thumbnail: string
    }
}

export const ShoeCard: FC<ShoeCardProps> = ({
    heroImg,
    changeHeroImage,
    shoeImages,
}) => {
    const handleClick = () => {
        if (heroImg !== shoeImages.shoe) changeHeroImage(shoeImages.shoe)
    }

    return (
        <div
            className={clsx(
                heroImg === shoeImages.shoe
                    ? 'border-coral-red'
                    : 'border-transparent',
                'cursor-pointer rounded-xl border-2 max-sm:flex-1'
            )}
            onClick={handleClick}
        >
            <div className="bg-card flex items-center justify-center rounded-xl bg-cover bg-center max-sm:p-4 sm:size-40">
                <img
                    src={shoeImages.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    )
}
