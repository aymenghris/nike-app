import { Image } from "@unpic/react"
import { ASSETS_PATHS } from "@/constants/assets-paths"

export const Logo = () => (
    <a href="/">
        <Image
            src={ASSETS_PATHS.footer.logo}
            alt="app logo"
            width={150}
            height={46}
        />
    </a>
)
