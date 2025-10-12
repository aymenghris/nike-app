import { services } from '../../constants.ts'
import { ServiceCard } from './ServiceCard.tsx'

export const Services = () => {
    return (
        <section className="c-padding-x c-max-container flex flex-wrap justify-center gap-9 py-10">
            {services.map((service) => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </section>
    )
}
