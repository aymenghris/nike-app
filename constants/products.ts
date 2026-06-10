import type { Product } from "@/types/product"

export const PRODUCTS = [
    {
        src: "/products/shoe-1.png",
        name: "nike vomero plus",
        rating: 4.0,
        price: "$190.00",
    },
    {
        src: "/products/shoe-2.png",
        name: "air jordan 4 retro",
        rating: 4.5,
        price: "$220.00",
    },
    {
        src: "/products/shoe-3.png",
        name: "nike air max plus",
        rating: 4.0,
        price: "$200.00",
    },
    {
        src: "/products/shoe-4.png",
        name: "nike air force 1 '07",
        rating: 4.5,
        price: "$115.00",
    },
] satisfies Product[]
