type Stat = {
    value: string | number
    label: string
}

export const HeroStatistics = ({ stats }: { stats: Stat[] }) => {
    return (
        <div className="mt-20 flex w-full items-start justify-start gap-13">
            {stats.map((stat) => (
                <div key={stat.label}>
                    <p className="font-bold text-4xl uppercase">{stat.value}</p>
                    <p className="text-slate-600 capitalize leading-7">
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    )
}
