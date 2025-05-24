import Image from "next/image";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <Hero2 />
      <Pricing />
    </div>
  );
}
