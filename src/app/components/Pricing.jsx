"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";


function PricingCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="min-w-80 w-full max-w-md rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-sm border border-white/20">
        {/* Top Image Flip Section */}
        <div
          className="relative w-full h-64 bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-t-xl cursor-pointer"
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
        >
          <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""}`}>
            <img
              src="/textures/card1.png"
              alt="Front"
              className="absolute w-full h-full object-cover backface-hidden rounded-xl"
            />
            <img
              src="/textures/card2.png"
              alt="Back"
              className="absolute w-full h-full object-cover backface-hidden rounded-xl transform rotate-y-180"
            />
          </div>
        </div>

        {/* Title + Price */}
        <div className="flex justify-between items-start gap-4 px-6 mt-6">
          <h3 className="text-lg sm:text-xl font-semibold capitalize text-white">DIGICard Reviews</h3>
          <div className="relative text-right">
            <div className="text-lg sm:text-xl font-medium text-white">190 MAD</div>
            <div className="absolute -bottom-4 text-sm sm:text-md line-through text-white/50">290 MAD</div>
          </div>
        </div>

        {/* Features */}
        <ul className="mt-8 flex flex-col gap-4 px-6">
          {[
            "Partage illimité",
            "Compatibilité avec toutes les plateformes d'avis",
            "3 couleurs d'impression",
            "Personnalisation complète",
            "Collecte instantanée des avis",
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-white/80 text-sm sm:text-md">
              <FaCheck className="w-4 h-4 -mb-[2px] text-white" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="flex justify-center mt-8 mb-6">
          <a
            href="/commande-DIGICard-reviews"
            className="text-sm sm:text-md font-semibold bg-white text-neutral-900 px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300"
          >
            Commander
          </a>
        </div>
      </div>
    </div>
  );
}


export default function Pricing() {
    return (
        <div className="pricing w-full min-h-screen flex flex-col justify-center items-end gap-8 md:px-24">
            
            <PricingCard />

        </div>
    );   
}