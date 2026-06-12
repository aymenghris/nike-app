import { Image } from "@unpic/react"
import { ASSETS_PATHS } from "@/constants/assets-paths.ts"

export const OfferImage = () => (
    <div className="flex-1">
        <Image
            src={ASSETS_PATHS.specialOffer.offer}
            alt="shoe promotion"
            width={773}
            height={687}
            className="w-full object-contain"
        />
    </div>
)
