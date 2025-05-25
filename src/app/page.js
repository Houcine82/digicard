import Image from "next/image";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Pricing from "./components/Pricing";
import ScrollingButtons from "./components/ScrollingButtons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ScrollingButtons />
      <Hero />
      <Hero2 />
      <Pricing />
    </div>
  );
}
