import type { ShoeAsset } from "@/types/shoe-asset"

export const STATISTICS = [
    { value: "1k+", label: "brands" },
    { value: "500+", label: "shops" },
    { value: "250k+", label: "customers" },
]

export const SHOES_ASSETS: ShoeAsset[] = [
    {
        id: 1,
        image: "/hero/shoe-1/image.png",
        thumbnail: "/hero/shoe-1/thumbnail.png",
    },
    {
        id: 2,
        image: "/hero/shoe-2/image.png",
        thumbnail: "/hero/shoe-2/thumbnail.png",
    },
    {
        id: 3,
        image: "/hero/shoe-3/image.png",
        thumbnail: "/hero/shoe-3/thumbnail.png",
    },
]

export const DEFAULT_SHOE_IMAGE = SHOES_ASSETS[0].image
