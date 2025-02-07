import useFetch from '../components/useFetch'
import { useContext, useEffect } from 'react'
import { ArmorContext } from '../components/context'
import { Link } from 'react-router-dom'
import Loading from './loading'


export default function Armors() {

    const { setArmorList } = useContext(ArmorContext)
    const { data, loading, error } = useFetch("https://mhw-db.com/armor/sets")


    useEffect(() => {
        if (data) {
            setArmorList(data)
        }
    })
    
    const LIMITE = 20
    let count = 0
    if (loading) return <div><Loading></Loading></div>
    if (error) return <div>ERROR COLOSAL</div>
    console.log(data);
    return (
        <>
            <h1 className='text-6xl text-center mt-4'>Armors</h1>
            {
                data.map(armor => {
                    // console.log(armor);
                    count++
                    if (count < LIMITE)
                        return (
                            <div key={armor.id}>
                                <Link className='flex justify-center text-4xl cursor-pointer' to={`/armor/${armor.id}`}>{armor.name}</Link>
                                <div className='flex space-x-4 p-4 justify-center'>
                                    {
                                        armor.pieces.map(piece => {
                                            if (piece.assets)
                                                return (
                                                    <div key={piece.id}>
                                                        <img src={piece.assets.imageMale} alt="armor" className="w-50 h-50 object-cover rounded-lg border-2" />
                                                    </div>
                                                )
                                        }
                                        )

                                    }
                                </div>
                            </div>
                        )
                }
                )
            }
            <h1>FIN</h1>
        </>
    )
}