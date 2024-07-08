import ColorPicker from './TShirtViewer/ColorPicker';
import './App.css';
import { Box } from '@mui/material';

import '../src/TShirtViewer/TshirtViewer.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { TShirtViewer } from './TShirtViewer/TShirtViewer';
import { Shirt } from './TShirtViewer/Shirt';
import BlenderShirt from './TShirtViewer/BlenderShirt';
import JacketShirt from './TShirtViewer/JacketShirt';
import MaleShirt1 from './TShirtViewer/MaleShirt1';
import MaleShirt2 from './TShirtViewer/MaleShirt2';
import ShirtRay from './TShirtViewer/ShirtRay';

const Models = () => {
  return (
    <Box
      className='app-container'
      display='grid'
      gridTemplateColumns='1fr 1fr'
      gridAutoRows='400px'
      justifyItems='center'
      height='100%'
    >
      <Box>
        <TShirtViewer model={<Shirt />} />
      </Box>
      {/* <Box>
        <TShirtViewer model={<BlenderShirt />} />
      </Box>
      <Box>
        <TShirtViewer model={<JacketShirt />} />
      </Box>
      <Box>
        <TShirtViewer model={<MaleShirt2 />} />
      </Box>
      <Box>
        <TShirtViewer model={<ShirtRay />} />
      </Box> */}

      <Box pt='7rem'>
        <ColorPicker />
      </Box>
    </Box>
  );
};

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path='/models' element={<Models />} />
        <Route
          path='/'
          element={
            <h1
              style={{ textAlign: 'center', marginTop: '5rem' }}
              onClick={() => navigate('/models')}
            >
              <button>See Models</button>
            </h1>
          }
        />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
