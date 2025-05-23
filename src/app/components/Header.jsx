import { FaHome, FaInfoCircle, FaEnvelope, FaShoppingCart } from "react-icons/fa";

export default function Header() {
    const navItems = [
        {
            label: "Accueil",
            icon: <FaHome className="w-4 h-4" />,
            href: "/"
        },
        {
            label: "Nos offres",
            icon: <FaInfoCircle className="w-4 h-4" />,
            href: "/"
        },
        {
            label: "Comment ça marche",
            icon: <FaEnvelope className="w-4 h-4" />,
            href: "/"
        },
        {
            label: "Contact",
            icon: <FaEnvelope className="w-4 h-4" />,
            href: "/"
        }
    ];

    return (
        <header className="fixed hidden md:inline w-full top-0 z-50 px-4 py-4">
            <div className="w-full flex items-center justify-center">
                <nav className="px-4 py-2 rounded-full border-[.3px] flex gap-4 items-center border-white/20 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-sm">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative drop">
                            <a 
                                href={item.href}
                                className="text-white text-sm relative flex items-center justify-center gap-1 p-1 px-2 rounded-full transition-all duration-300 hover:text-black hover:bg-white/90"
                            >
                                <span className="relative">{item.label}</span>
                                {item.label !== "Accueil" && item.label !== "Contact" && (
                                    <svg 
                                        stroke="currentColor" 
                                        fill="currentColor" 
                                        strokeWidth="0" 
                                        viewBox="0 0 24 24" 
                                        className="transition-transform" 
                                        height="1em" 
                                        width="1em" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                    </svg>
                                )}
                            </a>
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
}