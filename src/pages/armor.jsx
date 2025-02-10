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
            <Link className="border-2 rounded-3xl text-3xl p-1" to={"/armors"}> ◄◄ Return</Link>
            <h1 className="text-4xl text-center mb-3">{armor.name} Armor</h1>
            <div className="flex justify-center space-x-2 flex-wrap">
                <div>
                    <h1>MALE</h1>
                    {
                        armor.pieces.map(piece => {
                            return (
                                <div key={piece.id} className="flex">
                                    <img src={piece.assets.imageMale} alt="armor" className="w-50 h-50 object-cover rounded-lg border-2" />
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h1>FEMALE</h1>
                    {
                        armor.pieces.map(piece => {
                            return (
                                <div key={piece.id} className="flex space-x-2">
                                    <img src={piece.assets.imageFemale} alt="armor" className="w-50 h-50 object-cover rounded-lg border-2" />
                                    <div className="content-center">
                                        <p className="text-4xl">{piece.name} </p>
                                        <p className="text-4xl"> Rank: {piece.rank}</p>
                                        <p className="text-4xl"> Rare: {piece.rarity}</p>
                                        <p className="text-4xl"> Defense: {piece.defense.base}-{piece.defense.max}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}