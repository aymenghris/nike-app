import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const SubscribeForm = () => {
    return (
        <form
            className={cn(
                "flex w-full items-center gap-5 p-2.5",
                "sm:rounded-full sm:border sm:border-neutral-500 lg:max-w-[50%]",
                "max-sm:flex-col",
            )}
        >
            <input
                type="email"
                placeholder="subscribe@nike.com"
                required
                className={cn(
                    "pl-5",
                    "text-neutral-500",
                    "border outline-none",
                    "sm:flex-1 sm:border-none",
                    "max-sm:w-full max-sm:rounded-full max-sm:border-neutral-500 max-sm:p-5",
                )}
            />

            <Button type="submit" variant="primary" className="w-fit">
                sign up
            </Button>
        </form>
    )
}
