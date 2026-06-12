import { SERVICES } from "@/constants/services"
import { cn } from "@/lib/utils.ts"
import { ServiceCard } from "./service-card.tsx"

export const Services = () => {
    return (
        <section
            className={cn(
                "flex flex-wrap justify-center gap-9",
                "mx-auto max-w-360 px-8 py-10",
                "sm:px-16",
            )}
        >
            {SERVICES.map((service) => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </section>
    )
}
