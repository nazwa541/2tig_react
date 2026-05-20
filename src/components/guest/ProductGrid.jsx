import { useState, useEffect } from "react";
import productsData from "../../data/products.json";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData.products);
    }, []);

    return (
        <section
            id="products"
            className="py-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-pink-100 text-[#ff4c60] px-5 py-2 rounded-full text-sm font-semibold">
                        Our Products
                    </span>

                    <h2 className="text-5xl font-black text-[#203656] mt-6">
                        Best Food Menu
                    </h2>

                    <p className="text-[#8f9bad] mt-5 max-w-2xl mx-auto text-lg">
                        Pilihan menu terbaik dengan rasa premium
                        dan kualitas terbaik untuk pelanggan.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((product) => (

                        <div
                            key={product.id}
                            className="group bg-white rounded-[35px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 border border-gray-100"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                                />

                            </div>

                            {/* Content */}
                            <div className="p-7">

                                <div className="flex items-center justify-between mb-4">

                                    <span className="bg-pink-100 text-[#ff4c60] px-4 py-1 rounded-full text-sm font-medium">
                                        Favorite
                                    </span>

                                    <span className="text-yellow-400">
                                        ★★★★★
                                    </span>

                                </div>

                                <h3 className="text-2xl font-bold text-[#203656]">
                                    {product.name}
                                </h3>

                                <p className="text-[#8f9bad] mt-3 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-8">

                                    <span className="text-2xl font-black text-[#ff4c60]">
                                        Rp {product.price.toLocaleString("id-ID")}
                                    </span>

                                    <button className="bg-[#ff4c60] hover:bg-[#e63c50] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105">
                                        Order
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}