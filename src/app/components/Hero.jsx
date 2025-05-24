"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  useGSAP(() => {
    const heroTl = gsap.timeline();
    const headerTl = gsap.timeline();

    // Split the title into words and animate each
    const titleWords = document.querySelectorAll('.hero-h1-text span');

    headerTl
      .from(".header", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      });

    heroTl
      // Title animation with stagger
      .from(titleWords, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        rotateX: 90,
        transformOrigin: "50% 50% -50"
      })
      // Simple paragraph animation
      .from(".hero-p-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      // Simple button animation
      .from(".hero-button", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");
  });

  return (
    <div className="relative text-center min-h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className="hero-h1-text font-extrabold text-2xl md:text-5xl bg-clip-text text-white bg-gradient-to-b from-white to-blue-400">
        <span>La</span> <span>carte</span> <span>de</span> <span>visite</span> <span>digitale</span> <br /> 
        <div className="">
        <span>#1</span> <span>au</span> <span>Maroc</span>
        </div>
      </h1>
      <p className="hero-p-text text-xs md:text-lg max-w-[80%] md:max-w-[700px]">
        +10.000 professionnels ont déjà adopté la DIGICard, la solution moderne
        qui remplace le papier. Et vous, quand est-ce que vous passez à l'ère
        digitale ?
      </p>

      <button className="hero-button bg-white px-8 py-4 rounded-full text-md text-black font-semibold hover:scale-105 transition-transform">
        Achetez maintenant
      </button>

      {/* Image for now basic div */}
      <img className="w-52 h-32 md:hidden rounded-lg mt-10 border border-white" src="/textures/card1.png" />
      {/* Absolute blur overlay */}
      <div className="absolute bottom-0 bg-gradient-to-t from-gray-400 to-white rounded-t-[25%] w-screen h-[25vh] blur-3xl opacity-20"></div>
    </div>
  );
}
