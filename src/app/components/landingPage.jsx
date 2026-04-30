"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LandingPage({ playfair }) {
    return (
        <div className=" bg-[#f5f2e9] text-wrap flex flex-col min-h-screen justify-center items-center  md:px-20">

            <motion.h2
                className={`${playfair.className} text-4xl md:text-6xl mt-10 font-bold text-green-900`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Not Just a Perfume <br />
                It’s an <span className="italic">Identity.</span>
            </motion.h2>

            <motion.p
                className="mt-10  text-green-800"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.05, delay: 0.4 }
                    }
                }}
            >
                {"Discover luxury attars crafted to leave a lasting impression."
                    .split(" ")
                    .map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block"
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
            </motion.p>
            <a href="#products">
                <motion.button
                    className="mt-10 bg-[#034b1d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a6b2e]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    Explore Collection
                </motion.button>
            </a>


        </div>
    );
}