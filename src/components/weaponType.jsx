import { useContext, useState } from "react"
import { WeaponContext } from "./context"
import { Link } from "react-router-dom"

export default function WeaponType({ type }) {
    const [isOpen, setIsOpen] = useState(false)
    const { weaponList } = useContext(WeaponContext)

    if (weaponList !== null) {

        console.log(weaponList);
        return (
            <>
                <div className="flex justify-center space-x-3 ">
                    <img className="w-12 h-12" src={weaponList.find(w => w.type == type).assets.icon} alt="" />
                    <h1
                        className="text-4xl text-center mt-2 cursor-pointer select-none  border-4"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {type} {isOpen ? "▲" : "▼"}
                    </h1>
                </div>

                {isOpen && (
                    <div className="flex flex-wrap space-x-4 p-4 justify-center transition-all duration-300 ease-in-out">
                        {
                            weaponList.map(weapon => {
                                if (weapon.assets && weapon.type === type)
                                    return (
                                        <div key={weapon.id}>
                                            <h2 className="text-2xl">{weapon.name}</h2>
                                            <Link to={`/weapon/${weapon.id}`} className="cursor-pointer"><img
                                                src={weapon.assets.image}
                                                alt="arma"
                                                className="w-50 h-50 object-cover rounded-lg border-2"
                                            /></Link>
                                            
                                        </div>
                                    )
                            })
                        }
                    </div>
                )}
            </>
        )
    }
}