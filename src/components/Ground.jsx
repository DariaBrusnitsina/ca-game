/* eslint-disable react/no-unknown-property */
import { usePlane } from "@react-three/cannon"
import { grassTexture } from "../assets/textures"
import { NearestFilter, RepeatWrapping } from "three"

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [- Math.PI / 2,  0, 0],
    position: [24, 0, 24]
  }))


  grassTexture.magFilter = NearestFilter
  grassTexture.wrapS = RepeatWrapping
  grassTexture.wrapT = RepeatWrapping
  grassTexture.repeat.set(100, 100)

  return (
    <mesh
    ref={ref}>
      <circleGeometry attach='geometry'  args={[35,35]}/>

      {/* <planeGeometry attach='geometry' args={[150,150]}/> */}
      <meshStandardMaterial attach='material' map={grassTexture} />
    </mesh>
  )
}