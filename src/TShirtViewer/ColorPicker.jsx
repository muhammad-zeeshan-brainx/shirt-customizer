import { HexColorPicker } from 'react-colorful';
import { state } from './state';
import { useSnapshot } from 'valtio';

function ColorPicker() {
  const snap = useSnapshot(state);
  return (
    <div>
      <HexColorPicker
        color={snap.items[snap.current]}
        onChange={(color) => {
          state.items.Body_FRONT_2664 = color;
          state.items.Sleeves_FRONT_2669 = color;
        }}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}

export default ColorPicker;
