import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts"
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
export const HomePage = () => {
    return (
        <main>
            <div>
                Home
                <Hero />
                <FeaturedProducts />
                <Testimonials />
                <Faq />
            </div>
        </main>
    )
}   