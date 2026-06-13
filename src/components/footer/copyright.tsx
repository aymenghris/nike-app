import { cn } from "@/lib/utils.ts"

export const Copyright = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div
            className={cn(
                "flex justify-between",
                "mt-24",
                "cursor-pointer text-white/80",
                "max-sm:flex-col max-sm:items-center",
            )}
        >
            <p className="flex flex-1 items-center justify-start gap-2 font-montserrat">
                © {currentYear} Nike. All rights reserved.
            </p>

            <p className="font-montserrat capitalize">terms & conditions</p>
        </div>
    )
}
