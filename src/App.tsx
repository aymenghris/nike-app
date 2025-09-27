import {
    Navbar,
    Hero,
    PopularProduct,
    SuperQuality,
    Services,
    SpecialOffer,
    CustomerReviews,
    Subscribe,
    Footer,
} from '../components'

const App = () => {
    return (
        <main className="relative">
            <Navbar />
            <Hero />
            <PopularProduct />
            <SuperQuality />
            <Services />
            <SpecialOffer />
            <CustomerReviews />
            <Subscribe />
            <Footer />
        </main>
    )
}

export default App
