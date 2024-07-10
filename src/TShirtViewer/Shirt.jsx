/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 shirt-compressed.glb 
*/

import React, { useEffect, useRef, useState } from 'react';
import { Text, useGLTF, Html, Decal, useTexture } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { state } from './state';
import { useDrag, useGesture } from '@use-gesture/react';
import PullRelease from './PullRelease';
import { TextGeometry } from 'three/examples/jsm/Addons.js';
import { useSpring, animated } from '@react-spring/web';
import createTextCanvas from './TextureCanvas';
import * as THREE from 'three';
import { Box, TextField } from '@mui/material';

export function Shirt({ model }) {
  const group = useRef();
  const shirtFrontRef = useRef();
  const { nodes, materials } = useGLTF(`/shirt-compressed.glb`);
  const logoTexture = useTexture('/logo1.png');
  const snap = useSnapshot(state);

  const [textSize, setTextSize] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const [text, setText] = useState('Hello, World!');
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 1.3, z: 0.1 });

  const [logoProperties, setLogoProperties] = useState({ scale: 0.3 });

  const [texture, setTexture] = useState(null);

  const bind = useGesture({
    onDrag: ({ offset: [x, y], event }) => {
      console.log({ x, y });
      console.log({ event });
      state.isDragging = true;
      console.log('previousPos:', logoPosition);

      const posX = logoPosition.x + x / 10000;
      const posY = logoPosition.y + -y / 10000;

      let newPosX, newPosY;

      if (posX < 0.3 && posX > -0.3) {
        newPosX = posX;
      } else if (posX > logoPosition.x) {
        newPosX = logoPosition.x - 0.001;
      } else if (posX < logoPosition.x) {
        newPosX = logoPosition.x + 0.001;
      } else {
        newPosX = logoPosition.x;
      }

      if (posY < 1.4 && posY > 1.2) {
        newPosY = posY;
      } else if (posY > logoPosition.y) {
        newPosY = logoPosition.y + 0.001;
      } else if (posY < logoPosition.y) {
        newPosY = logoPosition.y - 0.001;
      } else {
        newPosY = logoPosition.y;
      }

      const newPosition = {
        ...logoPosition,
        x: newPosX,
        y: newPosY,
      };
      console.log('newPosition:', newPosition);
      setLogoPosition(newPosition);
    },
    onDragEnd: () => {
      console.log('drag end');
      state.isDragging = false;
    },
  });

  const handleChangePositionX = (value) => {
    setLogoPosition((prevPosition) => {
      return { ...prevPosition, x: Number(value) };
    });
  };

  const handleChangePositionY = (value) => {
    setLogoPosition((prevPosition) => {
      return { ...prevPosition, y: Number(value) };
    });
  };

  const handleChangeLogoScale = (value) => {
    setLogoProperties((prevProps) => {
      return { ...prevProps, scale: Number(value) };
    });
  };

  console.log({ shirtFrontRef });

  useEffect(() => {
    const { canvas } = createTextCanvas('Hello, World', 512, 512, 100);
    const texture = new THREE.CanvasTexture(canvas);
    setTexture(texture);
  }, []);
  console.log({ texture });
  return (
    <group dispose={null} scale={3} position={[0, -2.3, 0]}>
      <mesh
        geometry={nodes.Ribbing.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      ></mesh>

      <mesh
        geometry={nodes.Ribbing_1.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_2.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_3.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_4.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_5.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Front.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      ></mesh>

      <mesh
        geometry={nodes.Body_Front_1.geometry}
        material={materials.Body_FRONT_2664}
        material-color='Red'
      />
      <mesh
        geometry={nodes.Body_Front_2.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Back.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Back_1.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Back_2.geometry}
        material={materials.Body_FRONT_2664}
        material-color={snap.items.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Sleeves.geometry}
        material={materials.Sleeves_FRONT_2669}
        material-color={snap.items.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_1.geometry}
        material={materials.Sleeves_FRONT_2669}
        material-color={snap.items.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_2.geometry}
        material={materials.Sleeves_FRONT_2669}
        material-color={snap.items.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_3.geometry}
        material={materials.Sleeves_FRONT_2669}
        material-color={snap.items.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_4.geometry}
        material={materials.Sleeves_FRONT_2669}
        material-color={snap.items.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_5.geometry}
        material={materials.Sleeves_FRONT_2669}
        material-color={snap.items.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Body_Front.geometry}
        material={materials.Body_FRONT_2664}
        ref={shirtFrontRef}
      >
        {texture && (
          <Decal
            debug={false}
            position={[logoPosition.x, logoPosition.y, logoPosition.z]}
            rotation={[0, 0, 0]}
            scale={logoProperties.scale}
            map={logoTexture}
            {...bind()}
          ></Decal>
        )}
      </mesh>
      <Html>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          position='absolute'
          left='-6rem'
        >
          <label for='x-axis'>X-axis</label>

          <input
            id='x-axis'
            placeholder='change x-axis'
            type='number'
            step={0.01}
            onChange={(e) => handleChangePositionX(e.target.value)}
            defaultValue={logoPosition?.x}
          />

          <label for='y-axis'>Y-axis</label>

          <input
            id='y-axis'
            placeholder='change y-axis'
            type='number'
            step={0.01}
            onChange={(e) => handleChangePositionY(e.target.value)}
            defaultValue={logoPosition?.y}
          />

          <label for='scale'>Scale</label>

          <input
            id='scale'
            placeholder='scale'
            type='number'
            step={0.01}
            onChange={(e) => handleChangeLogoScale(e.target.value)}
            defaultValue={logoProperties.scale}
          />
        </Box>
      </Html>
    </group>
  );
}

useGLTF.preload('/shirt-compressed.glb');
