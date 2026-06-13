import { cn } from "@/lib/utils"
import { OfferDetails } from "./offer-details"
import { OfferImage } from "./offer-image"

export const SpecialOffer = () => {
    return (
        <section
            className={cn(
                "flex items-center justify-between gap-10",
                "mx-auto max-w-360 px-8 py-12",
                "max-xl:flex-col-reverse sm:px-16 sm:py-24",
            )}
        >
            <OfferImage />
            <OfferDetails />
        </section>
    )
}
