import { Image } from "@unpic/react"
import { ASSETS_PATHS } from "@/constants/assets-paths"

export const QualityImage = () => (
    <div className="relative flex flex-1 items-center justify-center">
        <Image
            src={ASSETS_PATHS.backgrounds.light}
            alt="super quality background"
            width={504}
            height={504}
            className="absolute -z-10 rounded-4xl"
        />

        <Image
            src={ASSETS_PATHS.superQuality.shoe}
            alt="super quality shoe"
            width={570}
            height={522}
        />
    </div>
)
