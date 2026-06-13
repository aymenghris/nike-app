import { cn } from "@/lib/utils"
import type { Service } from "@/types/service"

interface ServiceCard extends Service {}

export const ServiceCard = ({ icon: Icon, label, subtext }: ServiceCard) => {
    return (
        <div
            className={cn(
                "flex-1",
                "w-full px-10 py-16",
                "rounded-3xl shadow-2xl shadow-rose-400/15",
                "sm:w-87.5 sm:min-w-87.5",
            )}
        >
            <div className="flex size-12 items-center justify-center rounded-full bg-rose-400">
                <Icon className="text-white" />
            </div>

            <h3 className="mt-5 font-bold font-palanquin text-3xl capitalize leading-normal">
                {label}
            </h3>

            <p
                className={cn(
                    "mt-3",
                    "wrap-break-word font-montserrat text-lg text-neutral-500 leading-normal",
                    "first-letter:uppercase",
                )}
            >
                {subtext}
            </p>
        </div>
    )
}
