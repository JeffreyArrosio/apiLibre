import useFetch from '../components/useFetch'
import { useContext, useEffect } from 'react'
import { MonsterContext } from '../components/context'
import Loading from './loading'

export default function Monsters() {

    const {setMonsterList} = useContext(MonsterContext)

    const { data, loading, error } = useFetch("https://mhw-db.com/monsters")
    useEffect(() => {
        if(data)setMonsterList(data)
    })

    if (loading) return <div><Loading></Loading></div>
    if (error) return <div>ERROR COLOSAL</div>
    console.log(data);
    return (
        <>
            <h1>Monsters</h1>
            {
                data.map(monster => {
                    return(
                        <div key={monster.id}>
                            <h2 className='text-3xl'>{monster.name}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}