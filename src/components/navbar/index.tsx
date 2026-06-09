import { Image } from "@unpic/react"
import { ASSETS_PATHS } from "@/constants/assets-paths"
import { NAV_LINKS } from "@/constants/nav-links"

import { cn } from "@/lib/utils"
import { MobileMenuDropdown } from "./mobile-menu-dropdown"

export const Navbar = () => {
    return (
        <header className="absolute z-10 w-full px-8 py-8 sm:px-16">
            <nav className="mx-auto flex max-w-360 items-center justify-between">
                <a href="/">
                    <Image
                        src={ASSETS_PATHS.navbar.logo}
                        alt="app logo"
                        width={100}
                        height={100}
                    />
                </a>

                <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
                    {NAV_LINKS.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={cn(
                                    "font-medium text-lg text-neutral-600 capitalize leading-normal",
                                    "transition-colors",
                                    "hover:text-rose-600",
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <MobileMenuDropdown />
            </nav>
        </header>
    )
}
