import type { FC } from 'react'
import { assetsPath } from '../../constants.ts'

interface ReviewCardProps {
    src: string
    customerName: string
    rating: number
    feedback: string
}
export const ReviewCard: FC<ReviewCardProps> = ({
    src,
    customerName,
    rating,
    feedback,
}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={src}
                alt="customer"
                className="size-[120px] rounded-full object-cover"
            />
            <p className="c-info-text mt-6 max-w-sm text-center">{feedback}</p>
            <div className="mt-3 flex items-center justify-center gap-2.5">
                <img
                    src={assetsPath.shared.star}
                    alt="star"
                    width={24}
                    height={24}
                    className="m-0 object-contain"
                />
                <p className="font-montserrat text-slate-gray text-xl">
                    ({rating})
                </p>
            </div>
            <h3 className="font-palanquin text-c-3xl mt-1 text-center font-bold capitalize">
                {customerName}
            </h3>
        </div>
    )
}
