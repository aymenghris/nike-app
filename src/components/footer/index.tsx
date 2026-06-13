import { cn } from "@/lib/utils"
import { Copyright } from "./copyright"
import { Links } from "./links"
import { Logo } from "./logo"
import { Promo } from "./promo"
import { SocialMedia } from "./social-media"

export const Footer = () => (
    <section
        className={cn(
            "mx-auto max-w-360 px-8 pt-12 pb-8",
            "bg-black",
            "sm:px-16 sm:pt-24",
        )}
    >
        <footer>
            <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <Logo />
                    <Promo />
                    <SocialMedia />
                </div>
                <Links />
            </div>
            <Copyright />
        </footer>
    </section>
)
