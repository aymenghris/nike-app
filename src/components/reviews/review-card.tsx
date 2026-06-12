import { Image } from "@unpic/react"
import { StarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Review } from "@/types/review"

const ReviewAvatar = ({ src, alt }: { src: string; alt: string }) => (
    <div className="rounded-full bg-rose-100">
        <Image
            src={src}
            height={120}
            width={120}
            alt={alt}
            className="rounded-full object-cover"
        />
    </div>
)

const ReviewRating = ({ rating }: { rating: number }) => (
    <div className="mt-3 flex items-center justify-center gap-2.5">
        <StarIcon className="fill-rose-400 text-rose-400" size={24} />
        <p className="font-montserrat text-neutral-500 text-xl">
            ({rating.toFixed(1)})
        </p>
    </div>
)

interface ReviewCardProps extends Review {}
export const ReviewCard = ({
    customerAvatar,
    customerName,
    rating,
    feedback,
}: ReviewCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <ReviewAvatar src={customerAvatar} alt={customerName} />

            <p
                className={cn(
                    "mt-6 max-w-sm",
                    "text-center font-montserrat text-lg text-neutral-500 leading-7",
                )}
            >
                {feedback}
            </p>

            <ReviewRating rating={rating} />

            <h3 className="mt-1 text-center font-bold font-palanquin text-[28px] capitalize leading-tight">
                {customerName}
            </h3>
        </div>
    )
}
