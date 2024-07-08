import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function MaleShirt1(props) {
  const { nodes, materials } = useGLTF('/new/male_shirt_1.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Cotton_Voile_Copy_1_FRONT_1575522}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Cotton_Voile_FRONT_1575513}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material3815129}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/new/male_shirt_1.glb');
