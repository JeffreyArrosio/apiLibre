import useFetch from '../components/useFetch'
import { useContext, useEffect } from 'react'
import { WeaponContext } from '../components/context'
import Loading from './loading'
import WeaponType from '../components/weaponType'

export default function Weapons() {

    const { setWeaponList } = useContext(WeaponContext)
    const { data, loading, error } = useFetch("https://mhw-db.com/weapons")
    useEffect(() => {
        if (data) setWeaponList(data)
    })
    // const LIMITE = 20
    // let count = 0
    if (loading) return <div><Loading></Loading></div>
    if (error) return <div>ERROR COLOSAL</div>
    return (
        <>
            <h1 className='text-6xl text-center mt-4'>Weapons</h1>
            <WeaponType type={"great-sword"}></WeaponType>
            <WeaponType type={"long-sword"}></WeaponType>
            <WeaponType type={"sword-and-shield"}></WeaponType>
            <WeaponType type={"lance"}></WeaponType>
            <WeaponType type={"gunlance"}></WeaponType>
            <WeaponType type={"hammer"}></WeaponType>
            <WeaponType type={"dual-blades"}></WeaponType>
            <WeaponType type={"hunting-horn"}></WeaponType>
            <WeaponType type={"switch-axe"}></WeaponType>
            <WeaponType type={"insect-glaive"}></WeaponType>
            <WeaponType type={"charge-blade"}></WeaponType>
            <WeaponType type={"light-bowgun"}></WeaponType>
            <WeaponType type={"heavy-bowgun"}></WeaponType>
            <WeaponType type={"bow"}></WeaponType>
        </>
    )
}