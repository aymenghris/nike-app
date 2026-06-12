import { REVIEWS } from "@/constants/reviews"
import { ReviewCard } from "./review-card"

export const Reviews = () => {
    return (
        <section className="c-padding c-max-container bg-rose-50/50">
            <h3 className="text-center font-bold font-palanquin text-c-4xl capitalize">
                what our
                <span className="text-rose-400"> customers </span>
                say?
            </h3>

            <p className="c-info-text m-auto mt-4 max-w-lg text-center">
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
