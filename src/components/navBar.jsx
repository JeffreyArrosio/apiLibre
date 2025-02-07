import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <header className="bg-gray-900 text-white py-6 shadow-lg">
                <h1 className="text-7xl  text-center tracking-wide uppercase ">
                    Monster Hunter World
                </h1>

                <nav className="mt-4">
                    <div className="flex justify-center space-x-6 bg-gray-800 py-3 rounded-lg shadow-md">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-lg text-5xl font-semibold transition duration-300 mr-30  ${isActive ? "bg-yellow-500 text-gray-900" : "text-gray-300 hover:text-black hover:bg-white"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/armors"
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-lg text-3xl font-semibold transition duration-300 content-center ${isActive ? "bg-yellow-500 text-gray-900" : "text-gray-300 hover:text-black hover:bg-white"
                                }`
                            }
                        >
                            Armaduras
                        </NavLink>

                        <NavLink
                            to="/weapons"
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-lg text-3xl font-semibold transition duration-300 content-center ${isActive ? "bg-yellow-500 text-gray-900" : "text-gray-300 hover:text-black hover:bg-white"
                                }`
                            }
                        >
                            Armas
                        </NavLink>

                        <NavLink
                            to="/monsters"
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-lg text-3xl font-semibold transition duration-300 content-center ${isActive ? "bg-yellow-500 text-gray-900" : "text-gray-300 hover:text-black hover:bg-white"
                                }`
                            }
                        >
                            Monstruos
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    )
}