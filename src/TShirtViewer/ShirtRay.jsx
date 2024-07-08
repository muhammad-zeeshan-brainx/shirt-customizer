import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function ShirtRay(props) {
  const { nodes, materials } = useGLTF('/new/shirt_ray.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[0, 9151.993, -1582.108]} scale={8999.965}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RealShirt001_FabricWhiteForShirt_0.geometry}
          material={materials.FabricWhiteForShirt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RealShirt001_FabricWhiteForShirt_0_1.geometry}
          material={materials.FabricWhiteForShirt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RealShirt001_FabricWhiteForShirt_0_2.geometry}
          material={materials.FabricWhiteForShirt}
        />
        <group
          position={[0.002, 0.427, 0.271]}
          rotation={[-0.631, 0.602, 0]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle018_Button_0.geometry}
            material={materials.Button}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle018_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
        <group
          position={[0.004, 0.365, 0.32]}
          rotation={[-0.631, 0.558, 0]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle019_Button_0.geometry}
            material={materials.Button}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle019_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
        <group
          position={[0.003, 0.298, 0.349]}
          rotation={[0.132, 0.009, -0.229]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle020_Button_0.geometry}
            material={materials.Button}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle020_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
        <group
          position={[0, 0.22, 0.345]}
          rotation={[0.152, 0.291, -0.226]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle021_Button_0.geometry}
            material={materials.Button}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle021_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
        <group
          position={[-0.003, 0.14, 0.342]}
          rotation={[0.252, 0.481, -0.259]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle022_Button_0.geometry}
            material={materials.Button}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle022_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
        <group
          position={[-0.004, 0.061, 0.335]}
          rotation={[0.211, 0.336, -0.243]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle023_Button_0.geometry}
            material={materials.Button}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle023_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
        <group
          position={[-0.036, 0.46, 0.241]}
          rotation={[1.891, -0.148, -0.356]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle024_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle024_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
        <group
          position={[-0.547, 0.163, 0.196]}
          rotation={[1.782, 0.414, -1.92]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle025_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle025_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
        <group
          position={[0.549, 0.162, 0.194]}
          rotation={[2.598, 0.075, -0.478]}
          scale={0.011}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle026_Button_0.geometry}
            material={materials.Button}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle026_FabricWhiteForButton_0.geometry}
            material={materials.FabricWhiteForButton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/new/shirt_ray.glb');
