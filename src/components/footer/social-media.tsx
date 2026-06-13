import { SOCIALS } from "@/constants/footer"

export const SocialMedia = () => (
    <div className="mt-8 flex items-center gap-5">
        {SOCIALS.map(({ icon: Icon, alt }) => (
            <div
                key={alt}
                className="flex size-12 items-center justify-center rounded-full bg-white p-2.5"
            >
                <Icon />
            </div>
        ))}
    </div>
)
