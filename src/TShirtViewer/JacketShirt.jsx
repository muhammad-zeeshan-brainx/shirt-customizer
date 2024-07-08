import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function JacketShirt(props) {
  const { nodes, materials } = useGLTF('/new/jacket_shirt.glb');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shirt01_Shirt_M_0.geometry}
          material={materials.Shirt_M}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pants01_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pants01_Pants_M_0.geometry}
          material={materials.Pants_M}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jacket04_Layer_0.geometry}
          material={materials.Layer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jacket04_Zipper_0.geometry}
          material={materials.Zipper}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jacket04_Jacket_M_0.geometry}
          material={materials.Jacket_M}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jacket04_Layer_2_0.geometry}
          material={materials.Layer_2}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/new/jacket_shirt.glb');
