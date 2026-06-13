import { FOOTER_LINKS } from "@/constants/footer"
import { cn } from "@/lib/utils"

export const Links = () => (
    <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
        {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
                <h4
                    className={cn(
                        "mb-6",
                        "font-medium font-montserrat text-2xl text-white leading-normal",
                        "first-letter:uppercase",
                    )}
                >
                    {title}
                </h4>

                <ul>
                    {links.map(({ name, href }) => (
                        <li
                            key={name}
                            className={cn(
                                "mt-3",
                                "font-montserrat text-white/80 transition-colors",
                                "hover:text-neutral-500",
                                !name.includes("@") && "capitalize",
                            )}
                        >
                            <a href={href}>{name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
)
