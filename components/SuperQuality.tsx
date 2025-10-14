import { Button } from './utility'
import { assetsPath } from '../constants.ts'

export const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="c-padding c-max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
        >
            <div className="flex flex-1 flex-col capitalize">
                <h2 className="font-palanquin text-c-4xl font-bold lg:max-w-lg">
                    <span>we provide you</span>
                    <span className="text-coral-red"> super quality </span>
                    <span>shoes</span>
                </h2>
                <p className="c-info-text mt-4 lg:max-w-lg">
                    Ensuring premium comfort and style, our meticulously crafted
                    footwear is designed to elevate your experience, providing
                    you with unmatched quality, innovation, and a touch of
                    elegance.
                </p>
                <p className="c-info-text mt-6 lg:max-w-lg">
                    our dedication to detail and excellence ensures your
                    satisfaction
                </p>

                <Button className="mt-11 w-fit" label="view details" />
            </div>
            <div className="flex flex-1 items-center justify-center">
                <img
                    src={assetsPath.superQuality.shoe1}
                    alt="shoe 1"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    )
}
