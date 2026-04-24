import Head from 'next/head'
import { Playfair_Display, Poppins } from "next/font/google";
import WhatsAppButton from './components/wbutton';
import Navbar from './components/navbar';
import ScrollTopButton from './components/scrollUp';
import Product from './components/product';
import About from './components/about';
import Location from './components/location';
import Contact from './components/contact';


const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });


export default function Home() {
  return (
    <>
      <Head>
        <title className={`${playfair.className}`}>Al-Hafiz Attar And Perfumes</title>
      </Head>


      <main className={`${poppins.className} bg-[#f7efdc] text-[#034b1d] text-wrap  min-h-screen`}>
        <WhatsAppButton />
        <ScrollTopButton />
        {/* Navbar */}
        <Navbar playfair={playfair} />

        {/* Hero */}
             <section className="flex flex-col items-center justify-center gap-10 min-h-screen text-center  px-6">
                   <h2 className={`${playfair.className} text-4xl md:text-6xl font-bold pb-12 mb-4`}>
                     Not Just a Perfume — It’s an Identity.
                   </h2>
         
                   <p className="text-lg max-w-xl mx-auto mb-6 text-[#034b1d]/80">
                     Discover luxury attars crafted to leave a lasting impression.
                   </p>
         
                  <a href="#products">
                     <div className="bg-[#034b1d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a6b2e] transition">
                     Explore Collection
                      </div>
                   
                  </a>
         
                   <p className="mt-10 text-sm opacity-70 animate-bounce">
                     ↓ Scroll Down
                   </p>
                 </section>
        {/* Products */}
        <Product playfair={playfair} />

        {/* About */}
        <About playfair={playfair} />

        {/* Contact */}
          <Contact playfair={playfair} />
   
        <Location playfair={playfair} />

        {/* Footer */}
        <footer className="text-center py-6 border-t border-[#034b1d]/20">
          <p className={`${playfair.className} text-[#034b1d]/60`}>
            © 2026 Al-Hafiz Attar And Perfumes Malegaon Nashik. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  )
}
