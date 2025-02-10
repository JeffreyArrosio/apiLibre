import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { LightContext } from "./context";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function NavBar() {
    const { light, setLight } = useContext(LightContext)
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [navBg, setNavBg] = useState("bg-transparent");


    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30;
        const y = (e.clientY / innerHeight - 0.5) * -30;
        setRotateX(y);
        setRotateY(x);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                (localStorage.getItem("theme") === "dark") ?
                    setNavBg("bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg text-white")
                    : setNavBg("bg-amber-50 bg-opacity-80 backdrop-blur-md shadow-lg text-gray-900")
            } else {
                setNavBg("bg-transparent text-white");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (light) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }, [light]);
    let url
    (localStorage.getItem("theme") === "light") ? url = "https://i.ytimg.com/vi/JBhipr7mAJQ/maxresdefault.jpg" : url = "https://i.ytimg.com/vi/v6P4BpCV6yk/maxresdefault.jpg"

    return (
        <div
            className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${url})` }}
            onMouseMove={handleMouseMove}
        >
            <nav className={`fixed top-0 left-0 w-full transition-all duration-300 p-4 ${navBg} z-10`}>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    {/* Título */}
                    <h2 className="text-2xl font-bold tracking-widest transition-colors duration-300">
                        Monster Hunter World
                    </h2>

                    {/* Botón del menú hamburguesa */}
                    <button
                        className="lg:hidden p-2 rounded-md focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>

                    {/* Menú para pantallas grandes */}
                    <div className="hidden lg:flex space-x-6">
                        {["", "Armors", "Weapons", "Monsters"].map((item, index) => (
                            <NavLink
                                key={index}
                                to={`/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `px-5 py-2 rounded-lg text-xl font-semibold transition-colors duration-300 ${isActive ? "bg-yellow-500 text-gray-900" : "hover:text-black hover:bg-white"
                                    }`
                                }
                            >
                                {(item) ? item : "Home"}
                            </NavLink>
                        ))}
                        <button
                            onClick={() => setLight(!light)}
                            className="p-2 bg-amber-50 dark:bg-gray-900 rounded-full shadow-md transition-all duration-300"
                        >
                            {light ? <Moon className="text-blue-500" /> : <Sun className="text-yellow-400" />}
                        </button>
                    </div>
                </div>

                {/* Menú desplegable en móviles */}
                {isOpen && (
                    <div className="lg:hidden flex flex-col items-center space-y-4 py-4 mt-2 rounded-md shadow-md">
                        {["", "Armors", "Weapons", "Monsters"].map((item, index) => (
                            <NavLink
                                key={index}
                                to={`/${item.toLowerCase()}`}
                                className="w-full text-center py-3 text-lg font-semibold hover:bg-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                {(item) ? item : "Home"}
                            </NavLink>
                        ))}
                        <button
                            onClick={() => {
                                setLight(!light);
                                setIsOpen(false);
                            }}
                            className="p-2 bg-amber-50 dark:bg-gray-900 rounded-full shadow-md transition-all duration-300"
                        >
                            {light ? <Moon className="text-blue-500" /> : <Sun className="text-yellow-400" />}
                        </button>
                    </div>
                )}
            </nav>
            <h1
                className="text-white text-6xl tracking-wider mb-6 transform transition-all duration-300"
                style={{
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    textShadow: "5px 5px 20px rgba(0,0,0,0.7), 0 0 10px rgba(255,255,255,0.4)",
                }}
            >
                Monster Hunter World
            </h1>
        </div>
    );
}