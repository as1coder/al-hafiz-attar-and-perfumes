"use client";
import Image from "next/image";

export default function Product({ playfair }) {
    const whatsappNumber = "+918421405548";
    return (
        <>
            {/* Products */}
        <section id="products" className="py-2 px-6 max-w-6xl mx-auto">
          <h3 className={`${playfair.className} text-3xl font-bold text-center pb-20 mb-20`}>Our Collection</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rose Essence', image: '/eros.jpg', price: '₹199', description: 'A delightful blend of rose petals and vanilla' },
              { name: 'red diamond', image: '/red diamond.jpg', price: '₹499', description: 'Refresh your senses with this invigorating scent' },
              { name: 'oud', image: '/oud.jpg', price: '₹249', description: 'An enchanting fragrance for special occasions' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 hover:bg-green-100 p-6  rounded-2xl shadow-lg text-center">
                <Image src={item.image} alt={item.name} width={250} height={200} className="mx-auto rounded-2xl h-96 content-center mb-4" />
                <h4 className={`${playfair.className} text-xl font-semibold text-[#034b1d]`}>{item.name}</h4>
                <p className="text-[#034b1d]/70">{item.price}</p>
                <p className="text-[#034b1d]/60 text-sm mt-2">{item.description}</p>
                <button
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi%20I%20want%20to%20buy%20${item.name}`, '_blank')} className="mt-4 px-4 py-2 bg-[#034b1d] text-white rounded-full hover:bg-[#0a6b2e]">
                   Buy Now
                </button>

              </div>
            ))}
          </div>
        </section>
        </>
    );
}