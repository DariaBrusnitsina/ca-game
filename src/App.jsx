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

function App() {

  return (
    <>
      <ReactAudioPlayer
      className='player'
        src={music}
        autoPlay
        controls
        loop
        />


      <Canvas style={{ height: "100vh", width: "100vw", background: 'black'}}>
        <Sky sunPosition={[100, 20, 100]}/>
        <ambientLight intensity={2} />
        <FPV />
        <Physics>
          {forest.map((a) =>  <Forest key={`${a[0]} + ${a[1]}`} position={[a[0], 0, a[1]]} />)}
          {mushrooms.map((m) =>  <Mushrooms key={`${m[0]} + ${m[1]}`} position={[m[0],0, m[1]]} />)}

          {mushrooms[0] && <Player/>}
          <Ground/>
        </Physics>
      </Canvas>
      <div className='absolute centered coutsor'>+</div>
   </>
  )
}

export default App
