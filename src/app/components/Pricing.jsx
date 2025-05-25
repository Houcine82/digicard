"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const pricingCardsData = [
  {
    title: "DIGICard Reviews",
    price: 190,
    oldPrice: 290,
    features: [
      "Partage illimité",
      "Compatibilité avec toutes les plateformes d'avis",
      "3 couleurs d'impression",
      "Personnalisation complète",
      "Collecte instantanée des avis",
      "",
      "",
    ],
    callToAction: {
      text: "Commander",
      href: "/commande-DIGICard-reviews",
    },
    frontImage: "/assets/google.png",
    backImage: "/assets/backCard.png",
  },
  {
    title: "DIGICard Pro",
    price: 290,
    oldPrice: 390,
    features: [
      "Partage illimité",
      "Compatibilité avec toutes les plateformes d'avis",
      "5 couleurs d'impression",
      "Personnalisation complète",
      "Collecte instantanée des avis",
      "Statistiques détaillées",
      "",
    ],
    callToAction: {
      text: "Commander",
      href: "/commande-DIGICard-pro",
    },
    frontImage: "/textures/card1.png",
    backImage: "/textures/card2.png",
  },
  {
    title: "DIGICard Business",
    price: 490,
    oldPrice: 590,
    features: [
      "Partage illimité",
      "Compatibilité avec toutes les plateformes d'avis",
      "10 couleurs d'impression",
      "Personnalisation complète",
      "Collecte instantanée des avis",
      "Statistiques détaillées",
      "Accès prioritaire au support",
    ],
    callToAction: {
      text: "Commander",
      href: "/commande-DIGICard-business",
    },
    frontImage: "/assets/yourlogo.png",
    backImage: "/assets/backCard.png",
  },
];

function PricingCard({ data }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center scale-90">
      <div className="min-w-[25rem] h-[42rem] max-w-md rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-sm border border-white/20">
        {/* Top Image Flip Section */}
        <div
          className="relative w-full h-[16rem] bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-t-xl cursor-pointer"
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            <img
              src={data.frontImage}
              alt="Front"
              className="absolute w-full h-full object-cover backface-hidden rounded-xl"
            />
            <img
              src={data.backImage}
              alt="Back"
              className="absolute w-full h-full object-cover backface-hidden rounded-xl transform rotate-y-180"
            />
          </div>
        </div>

        {/* Title + Price */}
        <div className="flex justify-between items-start gap-4 px-6 mt-6">
          <h3 className="text-lg sm:text-xl font-semibold capitalize text-white">
            {data.title}
          </h3>
          <div className="relative text-right">
            <div className="text-lg sm:text-xl font-medium text-white">
              {data.price} MAD
            </div>
            <div className="absolute -bottom-4 text-sm sm:text-md line-through text-white/50">
              {data.oldPrice} MAD
            </div>
          </div>
        </div>

        {/* Features */}
        <ul className="mt-8 flex flex-col gap-4 px-6">
          {data.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-4 text-white/80 text-sm sm:text-md"
            >
              {feature ? (
                <FaCheck className="w-4 h-4 -mb-[2px] text-white" />
              ) : (
                <span>
                  <br />
                </span>
              )}
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="flex justify-center mt-8 mb-6">
          <a
            href={data.callToAction.href}
            className="text-sm sm:text-md font-semibold bg-white text-neutral-900 px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300"
          >
            {data.callToAction.text}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="pricing w-full min-h-screen flex flex-col justify-center items-center gap-4 md:px-40">
      <h1 className="max-w-4xl text-center font-bold text-4xl leading-relaxed">
        L’essentiel est de toujours garder sa Digicard. Commandez la vôtre dès
        maintenant !
      </h1>
      <p className="mt-2">Une variété de choix pour tous vos besoins.</p>
      <div className="flex gap-8">
        {pricingCardsData.map((data, index) => (
          <PricingCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
