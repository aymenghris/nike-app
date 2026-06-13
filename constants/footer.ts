import { FacebookIcon, InstagramIcon, XTwitterIcon } from "@/components/icons"

export const SOCIALS = [
    { icon: FacebookIcon, alt: "facebook logo" },
    { icon: XTwitterIcon, alt: "x (formerly twitter) logo" },
    { icon: InstagramIcon, alt: "instagram logo" },
]

export const FOOTER_LINKS = [
    {
        title: "products",
        links: [
            { name: "nike air max plus OG premium", href: "/" },
            { name: "nike pegasus premium", href: "/" },
            { name: "nike vomero premium", href: "/" },
            { name: 'air jordan 4 "toro"', href: "/" },
            { name: "jordan sixty plus low", href: "/" },
            { name: "air Jordan 1 Low", href: "/" },
        ],
    },
    {
        title: "help",
        links: [
            { name: "about us", href: "/" },
            { name: "FAQs", href: "/" },
            { name: "how it works", href: "/" },
            { name: "privacy policy", href: "/" },
            { name: "payment policy", href: "/" },
        ],
    },
    {
        title: "get in touch",
        links: [
            { name: "customer@nike.com", href: "mailto:customer@nike.com" },
            { name: "+123456789", href: "tel:+123456789" },
        ],
    },
]
