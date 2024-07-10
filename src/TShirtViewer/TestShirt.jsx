import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function TestShirt(props) {
  const { nodes, materials } = useGLTF('/test-shirt.glb');
  console.log({ nodes, materials });
  return (
    <group {...props} dispose={null}>
      <group />
    </group>
  );
}

useGLTF.preload('/test-shirt.glb');
