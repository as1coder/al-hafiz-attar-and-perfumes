import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
export default function Contact({ playfair }) {
    return (
        <div>
            <section id="contact" className="py-16 px-6 text-center">
                <h3 className={`${playfair.className} text-3xl font-bold mb-8`}>
                    Contact Us
                </h3>
                <p className="mt-6 text-[#034b1d]/70">
                    Reach out to us for orders & inquiries
                </p>

                <div className="flex justify-center gap-8 text-3xl">

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/918421405548?text=Hi%20I%20want%20to%20buy%20perfume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#034b1d] hover:text-[#0a6b2e] transition"
                    >
                        <FaWhatsapp />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:eagle32gaming@gmail.com"
                        className="text-[#034b1d] hover:text-[#0a6b2e] transition"
                    >
                        <FaEnvelope />
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/ig_really_4232/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#034b1d] hover:text-[#0a6b2e] transition"
                    >
                        <FaInstagram />
                    </a>

                </div>
            </section>
        </div>
    );
}