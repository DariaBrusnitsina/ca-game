/* eslint-disable react/no-unknown-property */
import { Physics } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber'
import { Ground } from './components/Ground'
import { Player } from './components/Player'
import { FPV } from './components/FPV'
import { forest, mushrooms } from './utils/cellularAutomata'
import { Sky } from '@react-three/drei'
import { Forest } from './components/Forest'
import { Mushrooms } from './components/Mushrooms'
import ReactAudioPlayer from 'react-audio-player'
import music from './assets/forest.mp3'
import { useEffect, useState } from 'react'

function App() {
  const [gameData, setGameData] = useState({})
  // let gameData = {}

  console.log(JSON.stringify(gameData) !== '{}')
  console.log(gameData)

  function initForest() {
    let localGameData = localStorage.getItem('forest-ca-game')

    if (localGameData === null) {
      let newGameSata = {}
      newGameSata.forest = forest
      newGameSata.mushrooms = mushrooms
      setGameData(newGameSata)
      localStorage.setItem('forest-ca-game', JSON.stringify(newGameSata))
    } else {
      setGameData(JSON.parse(localGameData))
    }
  }

  function handleResetForestData() {
    localStorage.removeItem("forest-ca-game")
    setGameData(() => {})
    initForest()
  }

  function handleDeleteMush(arr) {
    const filteredMushrooms = gameData.mushrooms.filter((m) => m.join('') !== arr.join(''))

    let newData = { forest: gameData.forest, mushrooms: filteredMushrooms}
    setGameData(newData)
    // console.log('gameData', gameData.mushrooms, 'filteredMushrooms', filteredMushrooms)

    // console.log(arr.join(''))

  }

  useEffect(() => {
    initForest()

  }, [])


  return (
    <>
      <ReactAudioPlayer
      className='player'
        src={music}
        autoPlay
        controls
        loop
      />
      <button onClick={handleResetForestData}>Restore forest</button>


      <Canvas style={{ height: "100vh", width: "100vw", background: 'black'}}>
        <Sky sunPosition={[100, 20, 100]}/>
        <ambientLight intensity={2} />
        <FPV />
        <Physics>
          {JSON.stringify(gameData) !== '{}' && gameData.forest.map((a) =>  <Forest key={`${a[0]} + ${a[1]}`} position={[a[0], 0, a[1]]} number={a[2]}/>)}
          {JSON.stringify(gameData) !== '{}' && gameData.mushrooms.map((m) =>  <Mushrooms arr={m} handleDeleteMush={handleDeleteMush} key={`${m[0]} + ${m[1]}`} position={[m[0],0, m[1]]} number={m[2]}/>)}

          {mushrooms[0] && <Player/>}
          <Ground/>
        </Physics>
      </Canvas>
      <div className='absolute centered coutsor'>+</div>
   </>
  )
}

export default App
