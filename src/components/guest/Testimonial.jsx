import { useState, useEffect } from "react";
import testimonialsData from "../../data/testimonials.json";

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        setTestimonials(testimonialsData.testimonials);
    }, []);

    return (
        <section
            id="testimonials"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-pink-100 text-[#ff4c60] px-5 py-2 rounded-full text-sm font-semibold">
                        Testimonials
                    </span>

                    <h2 className="text-5xl font-black text-[#203656] mt-6">
                        What Clients Say
                    </h2>

                    <p className="text-[#8f9bad] mt-5 max-w-2xl mx-auto text-lg">
                        Pengalaman pelanggan yang telah menggunakan
                        layanan Sedap setiap hari.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {testimonials.map((testi) => (

                        <div
                            key={testi.id}
                            className="bg-[#f9f9ff] rounded-[35px] p-8 shadow-sm hover:shadow-2xl transition duration-500 border border-gray-100"
                        >

                            {/* Top */}
                            <div className="flex items-center gap-4 mb-6">

                                <img
                                    src={testi.avatar}
                                    alt={testi.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                                />

                                <div>

                                    <h4 className="font-bold text-xl text-[#203656]">
                                        {testi.name}
                                    </h4>

                                    <div className="text-yellow-400 mt-1">
                                        ★★★★★
                                    </div>

                                </div>

                            </div>

                            {/* Comment */}
                            <p className="text-[#8f9bad] leading-relaxed italic text-lg">
                                “{testi.comment}”
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}