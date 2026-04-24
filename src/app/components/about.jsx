import Image from "next/image";
export default function About({ playfair }) {
    return (
        <div>
            {/* About */}
            <section id="about" className="py-20 px-6 max-w-6xl mx-auto">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT IMAGE */}
                    <div>
                        <Image
                            src="/about.jpg"
                            alt="about"
                            className="rounded-2xl shadow-lg w-full h-100 object-cover"
                            width={500}
                            height={500}
                            loading="lazy"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="text-center">
                        <h3 className={`${playfair.className} text-3xl  md:text-4xl font-bold mb-4`}>
                            About Us
                        </h3>

                        <p className="text-[#034b1d]/70 text-lg mb-4">
                            At <span className="font-semibold text-[#034b1d]">Al-Hafiz Attar And Perfumes</span>,
                            we craft premium fragrances with passion, purity, and elegance.
                        </p>

                        <p className="text-[#034b1d]/60 mb-6">
                            Our attars are carefully selected and blended to deliver long-lasting
                            aromas that reflect luxury and tradition. Every drop tells a story of
                            quality and trust.
                        </p>

                        {/* FEATURES */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-green-50 p-4 rounded-xl shadow">
                                🌿 100% Natural Oils
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl shadow">
                                ⏳ Long Lasting
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl shadow">
                                💎 Premium Quality
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl shadow">
                                🤝 Trusted by Customers
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}