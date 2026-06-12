import { ArrowRightCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DESCRIPTIONS } from "@/constants/offer"

export const OfferDetails = () => (
    <div className="flex flex-1 flex-col">
        <h2 className="mb-6 font-bold font-palanquin text-5xl capitalize">
            <span className="text-rose-400">special </span> offer
        </h2>

        {DESCRIPTIONS.map((description) => (
            <p
                key={description.id}
                className="mt-4 font-montserrat text-lg text-neutral-500 leading-7 first-letter:uppercase"
            >
                {description.text}
            </p>
        ))}

        <div className="mt-11 flex flex-wrap gap-4">
            <Button variant="primary">
                shop now
                <ArrowRightCircleIcon className="ml-2 size-5" />
            </Button>

            <Button variant="primary-outline">learn more</Button>
        </div>
    </div>
)
