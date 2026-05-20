import {
    FaSearch,
    FaUtensils,
    FaHamburger,
    FaPizzaSlice,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="pt-40 pb-20"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2">

                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">

                            {/* Image */}
                            <img
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
                                alt="Food"
                                className="w-full h-[38rem] object-cover group-hover:scale-105 transition duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            {/* Text */}
                            <div className="absolute bottom-0 left-0 p-10 text-white">

                                <span className="bg-[#ff4c60] px-5 py-2 rounded-full text-sm font-semibold">
                                    Featured Food
                                </span>

                                <h1 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
                                    Delicious Food
                                    <br />
                                    For Everyone
                                </h1>

                                <p className="text-gray-200 mt-5 max-w-2xl text-lg">
                                    Nikmati pengalaman memesan makanan modern
                                    dengan rasa premium dan kualitas terbaik.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-8">

                        {/* Search */}
                        <div className="bg-white rounded-[30px] shadow-lg p-7">

                            <h3 className="text-2xl font-bold text-[#203656] mb-5">
                                Search
                            </h3>

                            <div className="relative">

                                <input
                                    type="text"
                                    placeholder="Search food..."
                                    className="w-full bg-[#f5f5ff] rounded-full py-4 px-6 pr-14 outline-none"
                                />

                                <button className="absolute right-2 top-2 w-10 h-10 rounded-full bg-[#ff4c60] text-white flex items-center justify-center">
                                    <FaSearch />
                                </button>

                            </div>

                        </div>

                        {/* Categories */}
                        <div className="bg-white rounded-[30px] shadow-lg p-7">

                            <h3 className="text-2xl font-bold text-[#203656] mb-6">
                                Categories
                            </h3>

                            <div className="space-y-4">

                                <div className="flex items-center justify-between bg-[#f9f9ff] rounded-2xl p-4 hover:bg-pink-50 transition cursor-pointer">

                                    <div className="flex items-center gap-4">
                                        <FaUtensils className="text-[#ff4c60]" />
                                        <span className="font-medium text-[#203656]">
                                            Restaurant
                                        </span>
                                    </div>

                                    <span className="text-[#8f9bad]">
                                        12
                                    </span>

                                </div>

                                <div className="flex items-center justify-between bg-[#f9f9ff] rounded-2xl p-4 hover:bg-pink-50 transition cursor-pointer">

                                    <div className="flex items-center gap-4">
                                        <FaHamburger className="text-[#ff4c60]" />
                                        <span className="font-medium text-[#203656]">
                                            Fast Food
                                        </span>
                                    </div>

                                    <span className="text-[#8f9bad]">
                                        8
                                    </span>

                                </div>

                                <div className="flex items-center justify-between bg-[#f9f9ff] rounded-2xl p-4 hover:bg-pink-50 transition cursor-pointer">

                                    <div className="flex items-center gap-4">
                                        <FaPizzaSlice className="text-[#ff4c60]" />
                                        <span className="font-medium text-[#203656]">
                                            Pizza
                                        </span>
                                    </div>

                                    <span className="text-[#8f9bad]">
                                        5
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Popular */}
                        <div className="bg-white rounded-[30px] shadow-lg p-7">

                            <h3 className="text-2xl font-bold text-[#203656] mb-6">
                                Popular
                            </h3>

                            <div className="space-y-5">

                                <div className="flex gap-4">

                                    <img
                                        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=300&auto=format&fit=crop"
                                        alt=""
                                        className="w-20 h-20 rounded-2xl object-cover"
                                    />

                                    <div>

                                        <h4 className="font-bold text-[#203656]">
                                            Burger Special
                                        </h4>

                                        <p className="text-[#8f9bad] text-sm mt-1">
                                            Favorite menu
                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <img
                                        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300&auto=format&fit=crop"
                                        alt=""
                                        className="w-20 h-20 rounded-2xl object-cover"
                                    />

                                    <div>

                                        <h4 className="font-bold text-[#203656]">
                                            Healthy Salad
                                        </h4>

                                        <p className="text-[#8f9bad] text-sm mt-1">
                                            Trending food
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}