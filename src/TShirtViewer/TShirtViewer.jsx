import './TshirtViewer.css';

import React, { useState, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { Shirt } from './Shirt';
import { Box, TextField, Slider, Typography } from '@mui/material';
import PullRelease from './PullRelease';
import { useSnapshot } from 'valtio';
import { state } from './state';
import BlenderShirt from './BlenderShirt';
import JacketShirt from './JacketShirt';

const RenderScene = ({ model }) => {
  const snap = useSnapshot(state);

  const [isFront, setIsFront] = useState(true);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);
  const [isDragging, setIsDragging] = useState(false);

  const orbitRef = useRef();

  const [text, setText] = useState('Hello, World!');
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [textSize, setTextSize] = useState(64);

  const { rotation } = useSpring({
    rotation: isFront ? [0, 0, 0] : [0, Math.PI, 0],
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const handleFrontClick = () => {
    setIsFront(true);
    resetCamera();
  };

  const handleBackClick = () => {
    setIsFront(false);
    resetCamera();
  };

  const resetCamera = () => {
    setCameraPosition([0, 0, 3]);
    if (orbitRef.current) {
      orbitRef.current.reset();
    }
  };

  return (
    <Box className='viewer-container'>
      <Canvas camera={{ position: cameraPosition }}>
        {/* <Environment
        files="/img/venice_sunset_1k.hdr"
        background
        backgroundBlurriness={0.5}
      /> */}
        <Environment preset='forest' background backgroundBlurriness={0.5} />

        <ambientLight intensity={1} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <animated.group rotation={rotation}>
            {/* <Shirt model={model} /> */}
            {/* <BlenderShirt /> */}
            {model}
          </animated.group>
          <OrbitControls
            ref={orbitRef}
            enableZoom={false}
            maxPolarAngle={1.2}
            minPolarAngle={1}
            enabled={!snap?.isDragging}
          />
        </Suspense>
        {/* <Html>
          <PullRelease
            textPosition={textPosition}
            setTextPosition={setTextPosition}
          />{' '}
        </Html> */}
      </Canvas>
      <div className='controls'>
        <button onClick={handleFrontClick}>Front</button>
        <button onClick={handleBackClick}>Back</button>
      </div>
    </Box>
  );
};

export const TShirtViewer = ({ model }) => {
  return (
    <>
      <RenderScene model={model} />
    </>
  );
};
