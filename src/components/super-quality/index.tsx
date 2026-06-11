import { cn } from "@/lib/utils"
import { QualityContent } from "./quality-content"
import { QualityImage } from "./quality-image"

export const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className={cn(
                "flex items-center justify-between gap-10",
                "mx-auto w-full max-w-360 px-8 py-12",
                "max-lg:flex-col sm:px-16 sm:py-24",
            )}
        >
            <QualityContent />
            <QualityImage />
        </section>
    )
}
