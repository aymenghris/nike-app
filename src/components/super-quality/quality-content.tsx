import { Button } from "@/components/ui/button"
import { DESCRIPTIONS } from "@/constants/super-quality"
import { cn } from "@/lib/utils"

export const QualityContent = () => (
    <div className="flex flex-1 flex-col">
        <h2 className="mb-6 font-bold font-palanquin text-5xl capitalize lg:max-w-5xl">
            we provide you <span className="text-rose-400">super quality</span>{" "}
            shoes
        </h2>

        {DESCRIPTIONS.map((description) => (
            <p
                key={description.id}
                className={cn(
                    "mt-4",
                    "font-montserrat text-lg text-neutral-500 leading-7",
                    "first-letter:uppercase",
                    "lg:max-w-5xl",
                )}
            >
                {description.text}
            </p>
        ))}

        <Button variant="primary" className="mt-11 w-fit">
            view details
        </Button>
    </div>
)
