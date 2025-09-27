import { assetsPath, navLinks } from '../constants.ts'

export const Navbar = () => {
    return (
        <header className="c-padding-x absolute z-10 w-full py-8">
            <nav className="c-max-container flex items-center justify-between">
                <a href="/">
                    <img src={assetsPath.navbar.headerLogo} alt="logo" />
                </a>
                <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat text-slate-gray text-lg leading-normal"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={assetsPath.navbar.hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}
