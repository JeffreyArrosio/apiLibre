import { useContext, useState } from "react"
import { WeaponContext } from "./context"

export default function WeaponType({ type }) {
    const [isOpen, setIsOpen ]= useState(false)
    const { weaponList } = useContext(WeaponContext)

    if (weaponList);
    return (
        <>
            <h1
                className="text-4xl text-center mt-2 cursor-pointer select-none  border-4"
                onClick={() => setIsOpen(!isOpen)} 
            >
                {type} {isOpen ? "▲" : "▼"} 
            </h1>

            {isOpen && (
                <div className="flex flex-wrap space-x-4 p-4 justify-center transition-all duration-300 ease-in-out">
                    {
                        weaponList.map(weapon => {
                            if (weapon.assets && weapon.type === type)
                                return (
                                    <img
                                        src={weapon.assets.image}
                                        alt="arma"
                                        className="w-50 h-50 object-cover rounded-lg border-2"
                                        key={weapon.id}
                                    />
                                )
                        })
                    }
                </div>
            )}
        </>
    )
}