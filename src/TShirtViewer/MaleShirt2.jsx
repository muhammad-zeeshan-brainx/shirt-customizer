import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function MaleShirt2(props) {
  const { nodes, materials } = useGLTF('/new/male_shirt_2_c.glb');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_hook__0.geometry}
          material={materials['Scene_-_Root']}
          position={[1.674, 94.178, -1.81]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.t_shirt__0.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.t_shirt__0_1.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons__0.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/new/male_shirt_2_c.glb');
