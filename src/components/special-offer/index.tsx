import { cn } from "@/lib/utils"
import { OfferDetails } from "./offer-details"
import { OfferImage } from "./offer-image"

export const SpecialOffer = () => {
    return (
        <section
            className={cn(
                "c-padding c-max-container flex items-center justify-between gap-10 max-xl:flex-col-reverse",
            )}
        >
            <OfferImage />
            <OfferDetails />
        </section>
    )
}
