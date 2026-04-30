import Head from 'next/head'
import { Playfair_Display, Poppins } from "next/font/google";
import WhatsAppButton from './components/wbutton';
import Navbar from './components/navbar';
import ScrollTopButton from './components/scrollUp';
import Product from './components/product';
import About from './components/about';
import Location from './components/location';
import Contact from './components/contact';
import LandingPage from './components/landingPage';


const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });


export default function Home() {
  return (
    <>
      <Head>
        <title className={`${playfair.className}`}>M.T. Attars</title>
      </Head>


      <main className={`${poppins.className} bg-[#f7efdc] text-[#034b1d] text-wrap  min-h-screen`}>
        <WhatsAppButton />
        <ScrollTopButton />
        {/* Navbar */}
        <Navbar playfair={playfair} />
        

        {/* Hero */}
        <LandingPage playfair={playfair} />
             
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
            © 2026 M.T. Attars Malegaon Nashik. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  )
}
