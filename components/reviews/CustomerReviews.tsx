import { reviews } from '../../constants.ts'
import { ReviewCard } from './ReviewCard.tsx'

export const CustomerReviews = () => {
    return (
        <section className="c-padding bg-pale-blue c-max-container">
            <h3 className="font-palanquin text-c-4xl text-center font-bold capitalize">
                what our
                <span className="text-coral-red"> customers </span>
                say?
            </h3>
            <p className="c-info-text m-auto mt-4 max-w-lg text-center">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>
            <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName} {...review} />
                ))}
            </div>
        </section>
    )
}
