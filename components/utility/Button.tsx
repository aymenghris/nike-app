import type { FC } from 'react'
import clsx from 'clsx'

interface ButtonProps {
    className?: string
    iconAlt?: string
    iconSrc?: string
    label: string
    variant?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({
    label,
    iconSrc,
    iconAlt,
    className,
    variant = 'primary',
}) => {
    return (
        <button
            className={clsx(
                'flex items-center justify-center gap-2',
                'px-7 py-4',
                'font-montserrat text-lg leading-none capitalize',
                'rounded-full border',
                variant === 'primary'
                    ? 'bg-coral-red border-coral-red text-white'
                    : 'border-slate-gray text-slate-gray bg-white',
                className
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
