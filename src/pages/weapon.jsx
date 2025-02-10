import { WeaponContext } from "../components/context"
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"
import { Flame, Droplet, Snowflake, Zap, Origami, Rainbow, Skull, Moon, ZapOff, ShieldAlert } from "lucide-react";

export default function Weapon() {

    const { weaponList } = useContext(WeaponContext)
    const params = useParams()
    const weapon = weaponList[params.id - 1]

    const icons = {
        fire: <Flame className="text-red-500" />,
        water: <Droplet className="text-blue-500" />,
        ice: <Snowflake className="text-cyan-300" />,
        thunder: <Zap className="text-yellow-400" />,
        dragon: <Origami className="text-purple-700" />,
        blast: <Rainbow className="text-orange-500" />,
        poison: <Skull className="text-green-600" />,
        sleep: <Moon className="text-indigo-400" />,
        paralysis: <ZapOff className="text-yellow-500" />,
        stun: <ShieldAlert className="text-gray-500" />
    };

    let slots
    switch (weapon.slots[0]?.rank) {
        case 1:
            slots = "○"
            break;
        case 2:
            slots = "○○"
            break;
        case 3:
            slots = "○○○"
            break;
        default:
            slots = "-";
    }
    console.log(weapon);
    return (
        <>
            <Link className="border-2 rounded-3xl text-3xl p-1" to={"/weapons"}> ◄◄ Return</Link>

            <div className="flex container mx-auto mt-5 justify-center space-x-6 flex-wrap mb-4">
                <div className="row-span-3">
                    <img src={weapon.assets.image} alt="weapon" className="w-100 h-125 border" />
                </div>
                <div className="grid grid-rows-2">
                    <h1 className="text-6xl mb-3 content-center row-span-1">{weapon.name}</h1>
                    <div className="text-4xl row-span-2">
                        <div className="flex">
                            <img src={weapon.assets.icon} alt="icon" className="w-10 h-10" />
                            <h2>Rare: {weapon.rarity}</h2>
                        </div>
                        <div>
                            <h2>Attack: {weapon.attack.display}</h2>
                        </div>
                        <div>
                            <h2>Defense: +{(weapon.attributes.defense) ? weapon.attributes.defense : 0}</h2>
                        </div>
                        <div>
                            <h2>Slots: <span>{slots}</span></h2>
                        </div>
                        <div>
                            <h2>Element(s): <span>{weapon.elements.map((element, key) => {
                                return (
                                    <span key={key} className="flex content-center">{icons[element.type]}({element.type}) {element.damage}  {(element.hidden) ? <i>hidden</i> : "raw"}</span>
                                )
                            }
                            )}</span></h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}