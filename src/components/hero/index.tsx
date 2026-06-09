import { cn } from "@/lib/utils.ts"
import { HeroContent } from "./hero-content"
import { HeroShowcase } from "./hero-showcase"

export const Hero = () => (
    <section
        id="home"
        className={cn(
            "flex flex-col justify-center gap-10",
            "mx-auto min-h-screen w-full max-w-360 px-8 pb-12",
            "sm:px-16 sm:pb-24 xl:flex-row",
        )}
    >
        <HeroContent />
        <HeroShowcase />
    </section>
)
