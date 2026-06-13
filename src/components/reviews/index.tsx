import { REVIEWS } from "@/constants/reviews"
import { cn } from "@/lib/utils.ts"
import { ReviewCard } from "./review-card"

export const Reviews = () => {
    return (
        <section
            className={cn(
                "mx-auto max-w-360 px-8 py-12",
                "bg-rose-50/50",
                "sm:px-16 sm:py-24",
            )}
        >
            <h3 className="text-center font-bold font-palanquin text-5xl capitalize">
                what our
                <span className="text-rose-400"> customers </span>
                say?
            </h3>

            <p
                className={cn(
                    "m-auto mt-4 max-w-lg",
                    "text-center font-montserrat text-lg text-neutral-500 leading-7",
                )}
            >
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>

            <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
                {REVIEWS.map((review) => (
                    <ReviewCard key={review.customerName} {...review} />
                ))}
            </div>
        </section>
    )
}
