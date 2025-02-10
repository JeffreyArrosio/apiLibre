

export default function Footer() {

    return (
        <footer className=" py-4 shadow-md mt-5">
            <div className={`flex justify-center content-center space-x-6 ${(localStorage.getItem("theme") === "light")? "bg-amber-100":"bg-gray-800"} py-3 rounded-lg shadow-md`}>
                Monster Hunter DAW © 2025 by Jeffrey Arrosio is licensed under CC BY-NC-SA 4.0
                <img className="mx-4" src="https://sda.correos.es/images/wcag2AA-blue.png" alt="" width={100} height={59} />
            </div>
        </footer>
    )
}