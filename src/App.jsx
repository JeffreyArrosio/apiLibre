import './App.css'
import Index from './components'
import Layout from './components/layout'
import NotFound from './pages/notFound'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Armors from './pages/armors'
import Armor from './pages/armor'
import Weapons from './pages/weapons'
import Weapon from './pages/weapon'
import Monsters from './pages/monsters'
import Monster from './pages/monster'
import { MonsterContext, WeaponContext, ArmorContext, LightContext } from './components/context'




function App() {

  const [armorList, setArmorList] = useState(null)
  const [weaponList, setWeaponList] = useState(null)
  const [monsterList, setMonsterList] = useState(null)
  const [light, setLight] = useState(localStorage.getItem("theme") === "light")


  return (
    <>
      <ArmorContext.Provider value={{ armorList, setArmorList }}>
        <MonsterContext.Provider value={{ monsterList, setMonsterList }}>
          <WeaponContext.Provider value={{ weaponList, setWeaponList }}>
            <LightContext.Provider value={{ light, setLight }}>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route element={<Index />} path='/'></Route>
                  <Route element={<Armors />} path='/armors'></Route>
                  <Route element={<Armor />} path='/armor/:id'></Route>
                  <Route element={<Weapons />} path='/weapons'></Route>
                  <Route element={<Weapon />} path='/weapon/:id'></Route>
                  <Route element={<Monsters />} path='/monsters'></Route>
                  <Route element={<Monster />} path='/monster/:id'></Route>
                  <Route element={<NotFound />} path='*'></Route>
                </Route>
              </Routes>
            </LightContext.Provider>
          </WeaponContext.Provider>
        </MonsterContext.Provider>
      </ArmorContext.Provider>
    </>
  )
}

export default App
