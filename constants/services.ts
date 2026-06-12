import { ShieldTickIcon, SupportIcon, TruckFastIcon } from "@/components/icons"
import type { Service } from "@/types/service"

export const SERVICES: Service[] = [
    {
        icon: TruckFastIcon,
        label: "free shipping",
        subtext:
            "enjoy seamless shopping with our complimentary shipping service.",
    },
    {
        icon: ShieldTickIcon,
        label: "secure payment",
        subtext:
            "experience worry-free transactions with our secure payment options.",
    },
    {
        icon: SupportIcon,
        label: "love to help you",
        subtext:
            "our dedicated team is here to assist you every step of the way.",
    },
]
