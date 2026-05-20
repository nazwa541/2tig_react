import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f8f3ed] via-[#f1e3d3] to-[#e6d3c3] p-10">
            
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[#4b2e2e] mb-2 tracking-wide">
                    JavaScript Frameworks
                </h1>
                <p className="text-[#7a6651] text-sm">
                    Explore modern frameworks with elegant UI ✨
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {frameworkData.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition duration-300"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d6bfa7]/20 to-[#a67c5b]/10 opacity-0 hover:opacity-100 transition"></div>

                        {/* Content */}
                        <div className="relative z-10">

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-[#3e2723] mb-2">
                                {item.name}
                            </h2>

                            {/* Desc */}
                            <p className="text-[#6e5a4d] text-sm mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Info Box */}
                            <div className="bg-[#f5ede4] rounded-lg p-3 text-sm text-[#5c4a3f] mb-4">
                                <p>👨‍💻 <span className="font-medium">Developer:</span> {item.details?.developer}</p>
                                <p>📅 <span className="font-medium">Release:</span> {item.details?.releaseYear}</p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {item.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gradient-to-r from-[#e6d5c3] to-[#d6bfa7] text-[#4b2e2e] text-xs px-3 py-1 rounded-full font-semibold shadow-sm hover:scale-105 transition"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Button */}
                            <a
                                href={item.details?.officialWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-gradient-to-r from-[#5c3d2e] to-[#7a4f3a] text-white text-sm py-2 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition"
                            >
                                Visit Website →
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}