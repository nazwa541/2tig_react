export default function About() {
    const advantages = [
        {
            title: "Bahan Berkualitas",
            desc: "Menggunakan bahan-bahan segar dan berkualitas terbaik",
        },
        {
            title: "Harga Terjangkau",
            desc: "Harga bersahabat dengan kualitas restoran",
        },
        {
            title: "Pengiriman Cepat",
            desc: "Pesanan sampai tepat waktu di lokasi Anda",
        },
        {
            title: "Pelayanan 24/7",
            desc: "Layanan pelanggan siap membantu kapan saja",
        },
    ];

    return (
        <section
            id="about"
            className="py-28"
        >
            {/* Heading */}
            <div className="max-w-3xl mx-auto text-center mb-20">

                <span
                    className="
                        bg-pink-100
                        text-[#ff4c60]
                        px-5
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                    "
                >
                    Tentang Kami
                </span>

                <h2
                    className="
                        text-5xl
                        lg:text-6xl
                        font-black
                        text-[#203656]
                        mt-6
                        leading-tight
                    "
                >
                    Kenapa Memilih Sedap?
                </h2>

                <p
                    className="
                        text-[#8f9bad]
                        mt-6
                        leading-relaxed
                        text-lg
                    "
                >
                    Kami menghadirkan pengalaman memesan makanan
                    modern dengan pelayanan cepat, nyaman,
                    dan kualitas premium.
                </p>

            </div>

            {/* Content */}
            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-16
                    items-center
                "
            >

                {/* LEFT IMAGE */}
                <div className="relative">

                    {/* Blur */}
                    <div
                        className="
                            absolute
                            -bottom-10
                            -left-10
                            w-72
                            h-72
                            bg-pink-200
                            rounded-full
                            blur-3xl
                            opacity-30
                        "
                    ></div>

                    {/* Image Wrapper */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[40px]
                            shadow-2xl
                            group
                        "
                    >

                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                            alt="Restaurant"
                            className="
                                w-full
                                h-160
                                object-cover
                                group-hover:scale-105
                                transition
                                duration-700
                            "
                        />

                        {/* Overlay */}
                        <div
                            className="
                                absolute
                                inset-0
                                bg-linear-to-t
                                from-black/40
                                to-transparent
                            "
                        ></div>

                        {/* Floating Card */}
                        <div
                            className="
                                absolute
                                bottom-8
                                left-8
                                bg-white
                                rounded-3xl
                                px-6
                                py-5
                                shadow-2xl
                            "
                        >

                            <h4
                                className="
                                    text-3xl
                                    font-black
                                    text-[#203656]
                                "
                            >
                                10+
                            </h4>

                            <p
                                className="
                                    text-[#8f9bad]
                                    text-sm
                                    mt-1
                                "
                            >
                                Years Experience
                            </p>

                        </div>

                    </div>

                </div>

                {/* RIGHT CONTENT */}
                <div
                    className="
                        bg-white
                        rounded-[40px]
                        p-10
                        lg:p-14
                        shadow-xl
                        border
                        border-gray-100
                    "
                >

                    <span
                        className="
                            bg-pink-100
                            text-[#ff4c60]
                            px-5
                            py-2
                            rounded-full
                            text-sm
                            font-semibold
                        "
                    >
                        Why Choose Us
                    </span>

                    <h3
                        className="
                            text-4xl
                            lg:text-5xl
                            font-black
                            text-[#203656]
                            mt-6
                            leading-tight
                        "
                    >
                        Solusi Kuliner
                        <br />
                        Modern
                    </h3>

                    <p
                        className="
                            text-[#8f9bad]
                            leading-relaxed
                            mt-6
                            mb-10
                            text-lg
                        "
                    >
                        Sedap hadir sebagai platform pemesanan makanan online
                        yang menghubungkan pelanggan dengan berbagai restoran
                        terbaik dengan pengalaman cepat dan nyaman.
                    </p>

                    {/* Advantages */}
                    <div className="space-y-7">

                        {advantages.map((item, index) => (

                            <div
                                key={index}
                                className="flex items-start gap-5"
                            >

                                {/* Icon */}
                                <div
                                    className="
                                        min-w-15
                                        h-15
                                        rounded-2xl
                                        bg-pink-100
                                        flex
                                        items-center
                                        justify-center
                                        text-[#ff4c60]
                                        text-2xl
                                        font-bold
                                        shadow-sm
                                    "
                                >
                                    ✓
                                </div>

                                {/* Text */}
                                <div>

                                    <h4
                                        className="
                                            font-black
                                            text-2xl
                                            text-[#203656]
                                        "
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="
                                            text-[#8f9bad]
                                            text-base
                                            mt-2
                                            leading-relaxed
                                        "
                                    >
                                        {item.desc}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}