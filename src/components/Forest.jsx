/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 forest.gltf
Author: Aditya Graphical (https://sketchfab.com/Adityakm)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-trees-51cae4a194344e8bbfbd0a4cff205f76
Title: Low poly trees
*/

import { useGLTF } from '@react-three/drei'

export function Forest(props) {
  const { nodes, materials } = useGLTF('/forest.gltf')

  let number = Math.floor(Math.random() * (12 - 1) + 1)

  let forestArray = [
    {geometry: '_1_tree__1_tree_0', materials: '1_tree', rotation:[-Math.PI / 2, 0, 0], scale: [38.657, 38.657, 29.012]},
    {geometry: '_2_tree__2_tree_0', materials: '2_tree', rotation:[-Math.PI / 2, 0, 0], scale: 22.623},
    {geometry: '_3_tree__3_tree_0', materials: '3_tree', rotation:[-0.359, -0.228, -0.067], scale: [20.443, 25.444, 20.443]},
    {geometry: '_4_tree__4_tree_0', materials: '4_tree', rotation:[2.586, -1.382, -2.872], scale: [7.688, 14.399, 4.733]},
    {geometry: '_5_tree__5_tree_0', materials: '5_tree', rotation:[-Math.PI / 2, 0, 0], scale: [18.411, 18.411, 31.888]},
    {geometry: '_6_tree__6_tree_0', materials: '6_tree', rotation:[-Math.PI / 2, 0, 0], scale: 13.486},
    {geometry: '_7_tree__7_tree_0', materials: '7_tree', rotation:[-1.22, 0.041, -2.69], scale: [29.383, 29.383, 40.782]},
    {geometry: '_8_tree__8_tree_0', materials: '8_tree', rotation:[-Math.PI / 2, 0, -Math.PI / 2], scale: 6.046},
    {geometry: '_9_tree__9_tree_0', materials: '9_tree', rotation:[-Math.PI / 2, 0, -Math.PI / 2], scale: 3.32},
    {geometry: '_10_tree__10_tree_0', materials: '10_tree', rotation:[-Math.PI / 2, 0, -Math.PI / 2], scale: 4.84},
    {geometry: '_11_tree__11_tree_0', materials: '11_tree', rotation:[-Math.PI / 2, 0, -Math.PI / 2], scale: 8.862},
    {geometry: '_12_tree__12_tree_0', materials: '12_tree', rotation:[-Math.PI / 2, 0, -Math.PI / 2], scale: 12.614},
  ]

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
      <mesh geometry={nodes[forestArray[number].geometry].geometry} material={materials[forestArray[number].materials]} position={props.position} rotation={forestArray[number].rotation} scale={forestArray[number].scale} />

        {/* <mesh geometry={nodes._1_tree__1_tree_0.geometry} material={materials['1_tree']} position={props.position} rotation={[-Math.PI / 2, 0, 0]} scale={[38.657, 38.657, 29.012]} />
        <mesh geometry={nodes._2_tree__2_tree_0.geometry} material={materials['2_tree']} position={[-252.286, -1.165, 2.407]} rotation={[-Math.PI / 2, 0, 0]} scale={22.623} />
        <mesh geometry={nodes._3_tree__3_tree_0.geometry} material={materials['3_tree']} position={[-133.947, -1.165, 2.407]} rotation={[-0.359, -0.228, -0.067]} scale={[20.443, 25.444, 20.443]} />

        <mesh geometry={nodes._4_tree__4_tree_0.geometry} material={materials['4_tree']} position={[-18.233, -1.165, 2.407]} rotation={[2.586, -1.382, -2.872]} scale={[7.688, 14.399, 4.733]} />

        <mesh geometry={nodes._5_tree__5_tree_0.geometry} material={materials['5_tree']} position={[91.732, -2.326, 3.375]} rotation={[-Math.PI / 2, 0, 0]} scale={[18.411, 18.411, 31.888]} />
        <mesh geometry={nodes._6_tree__6_tree_0.geometry} material={materials['6_tree']} position={[256.661, -2.326, 3.375]} rotation={[-Math.PI / 2, 0, 0]} scale={13.486} />
        <mesh geometry={nodes._7_tree__7_tree_0.geometry} material={materials['7_tree']} position={[403.828, -1.165, 2.407]} rotation={[-1.22, 0.041, -2.69]} scale={[29.383, 29.383, 40.782]} />
        <mesh geometry={nodes._10_tree__10_tree_0.geometry} material={materials['10_tree']} position={[806.036, -2.465, 9.754]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={4.84} />
        <mesh geometry={nodes._11_tree__11_tree_0.geometry} material={materials['11_tree']} position={[946.038, -2.465, 9.754]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={8.862} />
        <mesh geometry={nodes._12_tree__12_tree_0.geometry} material={materials['12_tree']} position={[1048.779, -2.465, 9.754]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={12.614} />
        <mesh geometry={nodes._8_tree__8_tree_0.geometry} material={materials['8_tree']} position={[540.596, -2.465, 9.754]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={6.046} />
        <mesh geometry={nodes._9_tree__9_tree_0.geometry} material={materials['9_tree']} position={[657.947, -2.28, 9.754]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={3.32} />
        <mesh geometry={nodes.Rock_1__Rock_1__0.geometry} material={materials.Rock_1} position={[1263.794, -5.474, 48.395]} rotation={[-Math.PI / 2, 0, -1.854]} scale={[28.408, 28.408, 43.808]} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/forest.gltf')