import Navbar from "../../components/guest/Navbar";
import Hero from "../../components/guest/Hero";
import About from "../../components/guest/About";
import ProductGrid from "../../components/guest/ProductGrid";
import Testimonial from "../../components/guest/Testimonial";
import Footer from "../../components/guest/Footer";

export default function LandingPage() {
    return (
        <div className="bg-[#f9f9ff] overflow-hidden">

            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <Hero />

            {/* About */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <About />
            </div>

            {/* Products */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <ProductGrid />
            </div>

            {/* Testimonials */}
            <Testimonial />

            {/* Footer */}
            <Footer />

        </div>
    );
}