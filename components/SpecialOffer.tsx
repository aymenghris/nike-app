import { assetsPath } from '../constants.ts'
import { Button } from './utility'

export const SpecialOffer = () => {
    return (
        <section className="c-padding c-max-container flex items-center justify-between gap-10 max-xl:flex-col-reverse">
            <div className="flex-1">
                <img
                    src={assetsPath.specialOffer.offer}
                    alt="shoe promotion"
                    width={773}
                    height={687}
                    className="w-full object-contain"
                />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl font-bold">
                    <span className="text-coral-red">Special </span>
                    Offer
                </h2>
                <p className="info-text mt-4">
                    Embark on a shopping journey that redefines your experience
                    with unbeatable deals. From premier selections to incredible
                    savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="info-text mt-6">
                    Navigate a realm of possibilities designed to fulfill your
                    unique desires, surpassing the loftiest expectations. Your
                    journey with us is nothing short of exceptional.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button
                        label="shop now"
                        iconSrc={assetsPath.shared.arrowRight}
                    />
                    <Button label="learn more" variant="secondary" />
                </div>
            </div>
        </section>
    )
}
