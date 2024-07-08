import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { CanvasTexture } from 'three';

const TextTexture = ({ text, position, size }) => {
  const textureRef = useRef();

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set canvas size
    const fontSize = size || 64;
    const textWidth = context.measureText(text).width;
    const canvasWidth = textWidth + 20;
    const canvasHeight = fontSize + 20;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Draw text
    context.font = `${fontSize}px Arial`;
    context.fillStyle = 'white';
    context.fillText(text, 10, fontSize);

    // Create texture
    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    textureRef.current = texture;
  }, [text, size]);

  return textureRef.current;
};

export default TextTexture;
