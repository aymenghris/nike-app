import clsx from 'clsx'
import { HeroContent } from './HeroContent.tsx'
import { HeroShowcase } from './HeroShowcase.tsx'

export const Hero = () => (
    <section
        id="home"
        className={clsx(
            'flex flex-col justify-center gap-10',
            'padding-b c-max-container min-h-screen w-full',
            'xl:padding-l wide:padding-r lg:flex-row'
        )}
    >
        <HeroContent />
        <HeroShowcase />
    </section>
)
