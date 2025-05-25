import CompanySlider from "./CompanySlider";

export default function CTA() {
  return (
    <>
      <div className="CTA w-full h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] to-neutral-800 items-center justify-end">
        <div className="w-[26rem] h-48"></div>
        <h1 className="text-4xl font-bold mb-6">Prêt à commencer</h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mb-8">
          Découvrez une nouvelle façon d'interagir avec vos cartes en 3D. Créez,
          personnalisez et partagez vos designs uniques en quelques clics.
        </p>
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
          Créer ma carte
        </button>
        <CompanySlider />

      </div>
    </>
  );
}
