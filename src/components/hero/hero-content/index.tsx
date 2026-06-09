import { ArrowRightCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button.tsx"
import { STATISTICS } from "@/constants/hero"
import { cn } from "@/lib/utils.ts"
import { HeroHeading } from "./hero-heading"
import { HeroStatistics } from "./hero-statistics"

export const HeroContent = () => {
    return (
        <div
            className={cn(
                "flex flex-col items-start justify-center",
                "relative w-full px-8 pt-28",
                "max-xl:sm:py-24 xl:w-2/5",
            )}
        >
            <p className="font-montserrat text-rose-600 text-xl capitalize">
                our summer collection
            </p>

            <HeroHeading />

            <p className="mt-6 mb-14 font-montserrat text-lg text-neutral-500 capitalize leading-8 max-sm:max-w-sm">
                discover stylish nike arrivals, quality comfort, and innovation
                for your active life.
            </p>

            <Button variant="primary">
                shop now
                <ArrowRightCircleIcon className="ml-2 size-5" />
            </Button>

            <HeroStatistics stats={STATISTICS} />
        </div>
    )
}
