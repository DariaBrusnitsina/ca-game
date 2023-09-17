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
  const [mush, setmush] = useState(0)

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

  // function handleResetForestData() {
  //   localStorage.removeItem("forest-ca-game")
  //   setGameData(() => {})
  //   initForest()
  // }

  function handleDeleteMush(arr) {
    const filteredMushrooms = gameData.mushrooms.filter((m) => m.join('') !== arr.join(''))
    let newData = { forest: gameData.forest, mushrooms: filteredMushrooms}
    setGameData(newData)
    setmush(mush + 1)
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
      {/* <button onClick={handleResetForestData}>Restore forest</button> */}


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
      <div style={{ color: 'white'}} className='absolute centered coutsor'>＋ </div>
      <p style={{ borderRadius: '15px', padding: '10px', position: "absolute", top: "0", right: '10px', zIndex: '10', fontSize: '16px', background: 'white'}}>collected mushrooms: {mush}</p>
      <a target='blank' href='https://github.com/DariaBrusnitsina' style={{ position: "absolute", bottom: "0", left: '10px', zIndex: '10'}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
   </>
  )
}

export default App
