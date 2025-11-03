import Header from "./Header";

const BLOGS = [
    {
        id: 1,
        title: "How BardNative Helps Publishers Boost CPM by 40%",
        excerpt:
            "Discover how AI-driven yield optimization increased performance and transparency for top-tier publishers.",
        image: "/blog1.jpg", // Replace with your real images
        tag: "Case Study",
        gradient: "from-[#0D1B4C]/90 to-[#1E3A8A]/70",
    },
    {
        id: 2,
        title: "Inside BardNative: Our Mission to Make Ads Smarter, Not Louder",
        excerpt:
            "A look inside our tech — from real-time bidding to predictive analytics and publisher-first policies.",
        image: "/blog2.jpg",
        tag: "Inside BardNative",
        gradient: "from-[#1E3A8A]/90 to-indigo-600/70",
    },
    {
        id: 3,
        title: "How AI Is Redefining Digital Monetization in 2025",
        excerpt:
            "Why data-driven ad decisioning is changing the publishing landscape forever — and how you can benefit.",
        image: "/blog3.jpg",
        tag: "Insights",
        gradient: "from-[#0D1B4C]/90 to-[#8B5CF6]/60",
    },
];

export default function Blog() {
    return (
        <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white min-h-screen flex flex-col">
            <Header />

            {/* ===== HERO SECTION ===== */}
            <section className="relative text-center py-28 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,27,76,0.08),transparent_70%)]"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-[#0D1B4C] to-[#1E3A8A] text-transparent bg-clip-text">
                        BardNative Blog
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Stories, insights, and case studies from the future of ad
                        monetization — powered by innovation and trust.
                    </p>
                </div>
            </section>

            {/* ===== FEATURED POSTS ===== */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {BLOGS.map((post) => (
                    <div
                        key={post.id}
                        className="relative rounded-3xl overflow-hidden shadow-xl group hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className={`absolute inset-0 bg-gradient-to-t ${post.gradient}`}
                            ></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end text-left text-white">
                            <span className="text-sm font-medium opacity-90 mb-2 uppercase tracking-wide">
                                {post.tag}
                            </span>
                            <h2 className="text-2xl font-bold leading-snug mb-3 group-hover:underline">
                                {post.title}
                            </h2>
                            <p className="text-sm opacity-80 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* ===== BOTTOM CTA ===== */}
            <section className="relative text-center py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(13,27,76,0.06),transparent_70%)]"></div>
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold mb-6 text-[#0D1B4C]">
                        Have a story to share?
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        We're always looking to highlight publishers and partners redefining
                        monetization with BardNative. Let’s showcase your success story.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 rounded-full font-semibold text-white bg-[#0D1B4C] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Share Your Story
                    </a>
                </div>
            </section>
        </div>
    );
}