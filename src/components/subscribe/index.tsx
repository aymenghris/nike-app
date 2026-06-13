import { cn } from "@/lib/utils"
import { SubscribeForm } from "./subscribe-form"
import { SubscribeHeading } from "./subscribe-heading"

export const Subscribe = () => {
    return (
        <section
            id="contact-us"
            className={cn(
                "flex w-full items-center justify-between gap-10",
                "mx-auto max-w-360 px-8 py-16",
                "max-lg:flex-col sm:px-16 sm:py-32",
            )}
        >
            <SubscribeHeading />
            <SubscribeForm />
        </section>
    )
}
