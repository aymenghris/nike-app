import { Button } from '../utility'
import { assetsPath, statistics } from '../../constants.ts'

export const HeroContent = () => {
    return (
        <div className="max-xl:c-padding-x relative flex flex-col items-start justify-center pt-28 xl:w-2/5">
            <p className="font-montserrat text-coral-red text-xl capitalize">
                our summer collection
            </p>
            <h1 className="font-palanquin mt-10 text-8xl font-bold capitalize max-sm:text-[72px] max-sm:leading-[82px]">
                    <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
                        the new arrival
                    </span>
                <br />
                <span className="text-coral-red mt-3 inline-block">
                        nike
                    </span>
                <span> shoes</span>
            </h1>
            <p className="font-montserrat text-slate-gray mt-6 mb-14 text-lg leading-8 capitalize max-sm:max-w-sm">
                discover stylish nike arrivals, quality comfort, and
                innovation for your active life.
            </p>

            <Button
                label="shop now"
                iconSrc={assetsPath.hero.arrowRight}
                iconAlt="arrow right"
            />

            <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
                {statistics.map((stat, index) => (
                    <div key={index}>
                        <p className="text-4xl font-bold uppercase">
                            {stat.value}
                        </p>
                        <p className="font-montserrat text-slate-gray leading-7 capitalize">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
