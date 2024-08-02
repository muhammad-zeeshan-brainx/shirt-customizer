import { colors } from '@mui/material';
import { proxy } from 'valtio';
import { modelObjects } from '../constants';

export const state = proxy({
  current: null,
  items: {
    Body_FRONT_2664: '#973A43',
    Sleeves_FRONT_2669: '#973A43',
  },
  colors: {
    red: colors.red[200],
    green: colors.green[300],
    blue: colors.blue[300],
    pink: colors.pink[400],
    yellow: colors.yellow[400],
    brown: colors.brown[300],
  },
  model: {
    [`${modelObjects.frontImage}`]: {
      position: { x: 0, y: 1.3, z: 0.1 },
      scale: 0.3,
      rotation: '',
    },
    [`${modelObjects.backImage}`]: {
      position: {
        x: 0,
        y: 1.19,
        z: -0.1,
      },
      scale: 0.3,
      rotation: '',
    },
    selectedImage: '',
  },
  imageUrl: '',
  isDragging: false,
});
