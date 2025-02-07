import useFetch from '../components/useFetch'
import { useEffect, useState } from 'react'

export default function Monsters() {
    const { array, setArray } = useState([])
    const { data, loading, error } = useFetch("https://mhw-db.com/monsters")
    // useEffect(() => {
    //     setArray(data)
    // }
    // ,[])
    const LIMITE = 20
    let count = 0
    if (loading) return <div>Uniendo piezas de Anjanath...</div>
    if (error) return <div>ERROR COLOSAL</div>
    console.log(data);
    return (
        <>
            <h1>Monsters</h1>
            {/* <div className='flex flex-wrap space-x-4 p-4' >
                {
                    data.map(weapon => {
                        console.log(weapon);
                        if (weapon.assets)
                            return (
                                <img src={weapon.assets.image} alt="arma" className="w-40 h-40 object-cover rounded-lg" key={weapon.id} />
                            )
                    }
                    )
                }
            </div>
            <h1>FIN</h1> */}
        </>
    )
}