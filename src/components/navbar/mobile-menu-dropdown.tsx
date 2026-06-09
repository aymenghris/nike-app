import { Image } from "@unpic/react"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ASSETS_PATHS } from "@/constants/assets-paths"
import { NAV_LINKS } from "@/constants/nav-links"

import { cn } from "@/lib/utils"

export const MobileMenuDropdown = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon-lg" className="lg:hidden">
                    <MenuIcon className="size-6" />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-70 border-none bg-white text-gray-900"
            >
                <div className="flex h-full flex-col">
                    <SheetHeader className="my-5">
                        <SheetTitle className="sr-only">
                            Mobile navigation
                        </SheetTitle>

                        <SheetClose asChild>
                            <a href="/">
                                <Image
                                    src={ASSETS_PATHS.navbar.logo}
                                    alt="logo"
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </SheetClose>
                    </SheetHeader>

                    <ul className="mt-4 flex flex-col gap-2">
                        {NAV_LINKS.map((item) => (
                            <li key={item.label}>
                                <SheetClose asChild>
                                    <a
                                        href={item.href}
                                        className={cn(
                                            "block w-full px-4 py-3",
                                            "font-medium text-lg text-neutral-600 capitalize",
                                            "rounded-lg",
                                            "transition-all",
                                            "hover:bg-rose-50 hover:text-rose-600 active:scale-95",
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                </SheetClose>
                            </li>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
}
