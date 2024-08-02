import ColorPicker from './TShirtViewer/ColorPicker';
import './App.css';
import { Box, Button, TextareaAutosize, Typography } from '@mui/material';

import '../src/TShirtViewer/TshirtViewer.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { TShirtViewer } from './TShirtViewer/TShirtViewer';
import { Shirt } from './TShirtViewer/Shirt';
import BlenderShirt from './TShirtViewer/BlenderShirt';
import JacketShirt from './TShirtViewer/JacketShirt';
import MaleShirt1 from './TShirtViewer/MaleShirt1';
import MaleShirt2 from './TShirtViewer/MaleShirt2';
import ShirtRay from './TShirtViewer/ShirtRay';
import { TestShirt } from './TShirtViewer/TestShirt';
import { useEffect, useState } from 'react';
import { state } from './TShirtViewer/state';
import { modelObjects } from './constants';
import { useSnapshot } from 'valtio';
import AIImageGenerator from './AIImageGenerator';

const Models = () => {
  const snap = useSnapshot(state);

  const handleChangePositionX = (value) => {
    if (state?.model?.selectedImage) {
      state.model[`${state.model.selectedImage}`].position.x = Number(value);
    }
  };

  const handleChangePositionY = (value) => {
    if (state?.model?.selectedImage) {
      state.model[`${state.model.selectedImage}`].position.y = Number(value);
    }
  };

  const handleChangePositionZ = (value) => {
    if (state?.model?.selectedImage) {
      state.model[`${state.model.selectedImage}`].position.z = Number(value);
    }
  };

  const handleChangeLogoScale = (value) => {
    if (state?.model?.selectedImage) {
      state.model[`${state.model.selectedImage}`].scale = Number(value);
    }
  };

  return (
    <Box
      className='app-container'
      display='grid'
      gridTemplateColumns='0.7fr 1fr'
      // justifyItems='center'
      height='100%'
      p='2rem'
    >
      <Box>
        <TShirtViewer model={<Shirt />} />
      </Box>

      <Box justifySelf='center'>
        <ColorPicker />
        <Box
          pt='2rem'
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          gap='2rem'
        >
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <label for='x-axis'>X-axis</label>
            <input
              id='x-axis'
              placeholder='change x-axis'
              type='number'
              step={0.01}
              onChange={(e) => handleChangePositionX(e.target.value)}
              value={
                state.model[`${state.model?.selectedImage}`]?.position.x ?? ''
              }
            />

            <label for='y-axis'>Y-axis</label>

            <input
              id='y-axis'
              placeholder='change y-axis'
              type='number'
              step={0.01}
              onChange={(e) => handleChangePositionY(e.target.value)}
              value={
                state.model[`${state.model?.selectedImage}`]?.position.y ?? ''
              }
              // defaultValue={0}
            />

            {/* <label for='z-axis'>Z-axis</label>

            <input
              id='z-axis'
              placeholder='change z-axis'
              type='number'
              step={0.01}
              onChange={(e) => handleChangePositionZ(e.target.value)}
              value={
                state.model[`${state.model?.selectedImage}`]?.position.z ?? ''
              }
              // defaultValue={0}
            /> */}

            <label for='scale'>Scale</label>

            <input
              id='scale'
              placeholder='scale'
              type='number'
              step={0.01}
              onChange={(e) => handleChangeLogoScale(e.target.value)}
              value={state.model[`${state.model?.selectedImage}`]?.scale ?? ''}
            />
          </Box>
          <AIImageGenerator />
        </Box>
      </Box>
    </Box>
  );
};

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const handleBodyClick = (event) => {
  //     if (state?.model?.selectedImage) {
  //       const canvas = document.querySelector('canvas');
  //       if (canvas && !canvas.contains(event.target)) {
  //         // Only clear the selection if click is outside the canvas
  //         state.model.selectedImage = '';
  //         console.log('Deselected image: Click outside canvas');
  //       } else {
  //         console.log('not deselected');
  //       }
  //     }
  //   };
  //   document.addEventListener('click', handleBodyClick);
  //   return () => {
  //     document.removeEventListener('click', handleBodyClick);
  //   };
  // }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Models />} />
        {/* <Route
          path='/'
          element={
            <h1
              style={{ textAlign: 'center', marginTop: '5rem' }}
              onClick={() => navigate('/models')}
            >
              <button>See Models</button>
            </h1>
          }
        /> */}

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
