import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";

export default function Footer() {
    const partners = [
        "https://picsum.photos/id/20/100/60",
        "https://picsum.photos/id/30/100/60",
        "https://picsum.photos/id/40/100/60",
        "https://picsum.photos/id/50/100/60",
    ];

    return (
        <footer className="bg-[#302f4d] border-t border-[#403f63] mt-20">

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo */}
                    <div>

                        <h3 className="text-4xl font-black text-white mb-4">
                            Sedap<span className="text-[#ff4c60]">.</span>
                        </h3>

                        <p className="text-[#b9c0d3] leading-relaxed">
                            Platform pemesanan makanan online modern
                            dengan pelayanan cepat dan kualitas terbaik.
                        </p>

                    </div>

                    {/* Kontak */}
                    <div>

                        <h4 className="text-xl font-bold text-white mb-5">
                            Kontak
                        </h4>

                        <div className="space-y-4 text-[#b9c0d3]">

                            <p className="flex items-center gap-3">
                                <FaPhone className="text-[#ff4c60]" />
                                +62 812 3456 7890
                            </p>

                            <p className="flex items-center gap-3">
                                <FaEnvelope className="text-[#ff4c60]" />
                                info@sedap.com
                            </p>

                            <p className="flex items-center gap-3">
                                <FaWhatsapp className="text-[#ff4c60]" />
                                +62 812 3456 7890
                            </p>

                        </div>

                    </div>

                    {/* Sosial Media */}
                    <div>

                        <h4 className="text-xl font-bold text-white mb-5">
                            Follow Us
                        </h4>

                        <div className="flex gap-4">

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-[#403f63] flex items-center justify-center text-white hover:bg-[#ff4c60] transition"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-[#403f63] flex items-center justify-center text-white hover:bg-[#ff4c60] transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-[#403f63] flex items-center justify-center text-white hover:bg-[#ff4c60] transition"
                            >
                                <FaTwitter />
                            </a>

                        </div>

                    </div>

                    {/* Partner */}
                    <div>

                        <h4 className="text-xl font-bold text-white mb-5">
                            Partner
                        </h4>

                        <div className="grid grid-cols-2 gap-3">

                            {partners.map((partner, index) => (

                                <img
                                    key={index}
                                    src={partner}
                                    alt={`Partner ${index + 1}`}
                                    className="rounded-2xl shadow-sm border border-[#403f63]"
                                />

                            ))}

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-[#403f63] mt-12 pt-8 text-center text-[#b9c0d3] text-sm">
                    © 2025 Sedap Restaurant. All rights reserved.
                </div>

            </div>
        </footer>
    );
}