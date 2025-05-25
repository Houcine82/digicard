import {
  FaGoogle,
  FaAmazon,
  FaApple,
  FaMicrosoft,
  FaFacebook,
  FaReact,
  FaTiktok,

} from "react-icons/fa";

import Marquee from "react-fast-marquee";


export default function CompanySlider() {
  const logos = [FaGoogle, FaAmazon, FaApple, FaMicrosoft, FaFacebook, FaReact, FaTiktok];

  return (
    <div className="max-w-xl mt-20 mb-44">

        <h2 className="text-md mb-4 text-center italic">Entreprises qui nous font confiance</h2>

        <Marquee className="" speed={50}>

            {logos.map((Logo, index) => (
            <Logo key={index} className="w-12 h-12 m-5 rounded-lg" />
            ))}

        </Marquee>
    </div>
  );
}
