import type { FC } from 'react'
import clsx from 'clsx'

interface ButtonProps {
    label: string
    iconSrc: string
    iconAlt: string
}

export const Button: FC<ButtonProps> = ({ label, iconSrc, iconAlt }) => {
    return (
        <button
            className={clsx(
                'flex items-center justify-center gap-2',
                'px-7 py-4',
                'font-montserrat text-lg leading-none text-white',
                'bg-coral-red border-coral-red rounded-full border'
            )}
        >
            {label}
            {iconSrc && (
                <img
                    className="ml-2 size-5 rounded-full"
                    src={iconSrc}
                    alt={iconAlt}
                />
            )}
        </button>
    )
}
