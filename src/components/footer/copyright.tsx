export const Copyright = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="text-white-400 mt-24 flex justify-between max-sm:flex-col max-sm:items-center">
            <p className="font-montserrat flex flex-1 cursor-pointer items-center justify-start gap-2">
                © {currentYear} Nike. All rights reserved.
            </p>
            <p className="font-montserrat cursor-pointer capitalize">
                terms & conditions
            </p>
        </div>
    )
}
