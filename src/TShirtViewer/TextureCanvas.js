import * as THREE from 'three';

export default function createTextCanvas(text, width, height, fontSize) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');

  context.fillStyle = 'white';
  context.fillRect(0, 0, width, height);

  context.font = `${fontSize}px Arial`;
  context.fillStyle = 'blue';
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  const textWidth = context.measureText(text).width;
  const textOverflow = textWidth > width;

  //   if (textOverflow) {
  //     alert('Text overflows the node boundary');
  //   }

  context.fillText(text, width / 2, height / 2);

  return { canvas, textOverflow };
}
