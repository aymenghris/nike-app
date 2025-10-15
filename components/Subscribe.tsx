import clsx from 'clsx'
import { Button } from './utility'

export const Subscribe = () => {
    return (
        <section
            id="contact-us"
            className={clsx(
                'flex items-center justify-between gap-10',
                'c-padding-x c-max-container w-full py-16',
                'max-lg:flex-col sm:py-32'
            )}
        >
            <h3 className="text-c-4xl font-palanquin leading-[68px] font-bold capitalize lg:max-w-lg">
                sign up form <span className="text-coral-red"> updates </span>&
                newsletter
            </h3>
            <div className="sm:border-slate-gray flex w-full items-center gap-5 p-2.5 max-sm:flex-col sm:rounded-full sm:border lg:max-w-[40%]">
                <input
                    type="email"
                    placeholder="subscribe@nike.com"
                    className={clsx(
                        'pl-5',
                        'text-slate-gray text-base leading-normal',
                        'border outline-none',
                        'max-sm:border-slate-gray max-sm:w-full max-sm:rounded-full max-sm:p-5 sm:flex-1 sm:border-none'
                    )}
                />
                <div className="flex items-center max-sm:w-full max-sm:justify-end">
                    <Button className="w-full" label="sign up" />
                </div>
            </div>
        </section>
    )
}
