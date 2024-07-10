import React, { useRef, useState } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { state } from './state';

export default function BlenderShirt(props) {
  const { nodes, materials } = useGLTF('/blender-shirt.glb');
  const logoTexture = useTexture('/logo2.png');

  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 1.3, z: 0.1 });

  const snap = useSnapshot(state);

  console.log({ materials, nodes });

  return (
    <group dispose={null} scale={3} position={[0, -2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbing_Node.geometry}
        material={materials['Body_FRONT_2664.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbing_Node001.geometry}
        material={materials['Body_FRONT_2664.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sleeves_Node.geometry}
        material={materials['Sleeves_FRONT_2669.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sleeves_Node001.geometry}
        material={materials['Sleeves_FRONT_2669.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Back001.geometry}
        material={materials['Body_FRONT_2664.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Back001_1.geometry}
        material={materials.printableBack}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Front001.geometry}
        material={materials['Body_FRONT_2664.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Front001_1.geometry}
        material={materials['printableFront.001']}
      >
        <meshBasicMaterial transparent opacity={0} />
        <Decal
          debug={true}
          position={[logoPosition.x, logoPosition.y, logoPosition.z]}
          rotation={[0, 0, 0]}
          scale={0.2}
          map={logoTexture}
          // {...bind()}
        ></Decal>
      </mesh>
    </group>
  );
}

useGLTF.preload('/blender-shirt.glb');
