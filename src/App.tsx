import {
    Footer,
    Hero,
    Navbar,
    PopularProduct,
    Reviews,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality,
} from "./components"

const App = () => {
    return (
        <main className="relative">
            <Navbar />
            <Hero />
            <PopularProduct />
            <SuperQuality />
            <Services />
            <SpecialOffer />
            <Reviews />
            <Subscribe />
            <Footer />
        </main>
    )
}

export default App
