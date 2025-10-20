import { assetsPath, footerLinks, socialMedia } from '../constants.ts'
import clsx from 'clsx'

export const Footer = () => {
    return (
        <section className="c-padding-x c-padding-t c-max-container bg-black pb-8">
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
}

const Logo = () => (
    <a href="">
        <img src={assetsPath.footer.logo} alt="" width={150} height={46} />
    </a>
)

const Promo = () => (
    <p className="font-montserrat text-white-400 mt-6 text-base leading-7 first-letter:capitalize sm:max-w-sm">
        step into greatness with the latest nike collection. visit our stores
        for expert fitting and exclusive member benefits
    </p>
)

const SocialMedia = () => (
    <div className="mt-8 flex items-center gap-5">
        {socialMedia.map(({ src, alt }) => (
            <div className="flex size-12 items-center justify-center rounded-full bg-white p-2.5">
                <img src={src} alt={alt} />
            </div>
        ))}
    </div>
)

const Links = () => {
    return (
        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
            {footerLinks.map(({ title, links }) => (
                <div key={title} className="">
                    <h4 className="font-montserrat mb-6 text-2xl leading-normal font-medium text-white first-letter:uppercase">
                        {title}
                    </h4>
                    <ul>
                        {links.map(({ name, href }) => (
                            <li
                                key={name}
                                className={clsx(
                                    'text-white-400 font-montserrat hover:text-slate-gray mt-3 text-base leading-normal transition-colors',
                                    !name.includes('@') && 'capitalize'
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
}

const Copyright = () => {
    const currentYear = new Date().getFullYear()
    return (
        <p className="text-white-400 mt-24 flex justify-between max-sm:flex-col max-sm:items-center">
            <p className="font-montserrat flex flex-1 cursor-pointer items-center justify-start gap-2">
                © {currentYear} Nike. All rights reserved.
            </p>
            <p className="font-montserrat cursor-pointer capitalize">
                terms & conditions
            </p>
        </p>
    )
}
