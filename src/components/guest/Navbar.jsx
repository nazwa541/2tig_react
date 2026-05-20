import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaSearch,
} from "react-icons/fa";

import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">

            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6">

                <div className="bg-white rounded-full shadow-xl px-8 py-5 flex items-center justify-between">

                    {/* LEFT */}
                    <div className="flex items-center gap-10">

                        {/* Logo */}
                        <div className="text-4xl font-black text-[#203656]">
                            Sedap<span className="text-[#ff4c60]">.</span>
                        </div>

                        {/* Menu */}
                        <nav className="hidden lg:flex items-center gap-8 font-semibold text-[#5e5c7f]">

                            <a href="#home" className="hover:text-[#ff4c60] transition">
                                Home
                            </a>

                            <a href="#about" className="hover:text-[#ff4c60] transition">
                                About
                            </a>

                            <a href="#products" className="hover:text-[#ff4c60] transition">
                                Products
                            </a>

                            <a href="#testimonials" className="hover:text-[#ff4c60] transition">
                                Testimonials
                            </a>

                        </nav>

                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-5">

                        {/* Social */}
                        <div className="hidden md:flex items-center gap-3 text-[#5e5c7f]">

                            <a href="#" className="hover:text-[#ff4c60] transition">
                                <FaFacebookF />
                            </a>

                            <a href="#" className="hover:text-[#ff4c60] transition">
                                <FaInstagram />
                            </a>

                            <a href="#" className="hover:text-[#ff4c60] transition">
                                <FaTwitter />
                            </a>

                        </div>

                        {/* Search */}
                        <button className="w-11 h-11 rounded-full bg-[#f3f4ff] flex items-center justify-center text-[#203656] hover:bg-[#ff4c60] hover:text-white transition">
                            <FaSearch />
                        </button>

                        {/* Menu */}
                        <button className="w-11 h-11 rounded-full bg-[#ff4c60] flex items-center justify-center text-white text-xl">
                            <HiMenuAlt3 />
                        </button>

                    </div>

                </div>

            </div>

        </header>
    );
}