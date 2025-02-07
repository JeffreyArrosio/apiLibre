import { Link, useParams } from "react-router-dom"
import { useContext } from "react"
import { ArmorContext } from "../components/context"

export default function Armor() {
    const { armorList } = useContext(ArmorContext)
    const params = useParams()
    const armor = armorList[params.id - 1]
    console.log(armor.pieces);
    return (
        <>
            <Link className="border-2 rounded-3xl text-3xl p-1" to={"/armors"}> ◄◄ Volver</Link>
            <h1 className="text-4xl text-center mb-3">{armor.name} Armor</h1>
            {
                armor.pieces.map(piece => {
                    return (
                        <div key={piece.id} className="flex">
                            <img src={piece.assets.imageMale} alt="armor" className="w-50 h-50 object-cover rounded-lg border-2" />
                            <div className="content-center">
                                <p className="text-4xl">{piece.name} </p>
                                <p className="text-4xl"> Rank: {piece.rank}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}