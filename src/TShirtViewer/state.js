import { proxy } from 'valtio';

export const state = proxy({
  current: null,
  items: {
    Body_FRONT_2664: '#ff3',
    Sleeves_FRONT_2669: '#ff3',
  },
  isDragging: false,
});
