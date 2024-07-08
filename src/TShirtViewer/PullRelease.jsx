import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useSnapshot } from 'valtio';
import { state } from './state';

function PullRelease({ textPosition, setTextPosition }) {
  const snap = useSnapshot(state);

  const [{ x, y }, api] = useSpring(() => ({
    x: textPosition.x,
    y: textPosition.y,
  }));

  const bind = useDrag(
    ({ down, movement: [mx, my], memo = [x.get(), y.get()] }) => {
      state.isDragging = down;
      if (!down) {
        setTextPosition({ x: memo[0] + mx, y: memo[1] + my });
      }
      api.start({ x: memo[0] + mx, y: memo[1] + my, immediate: down });
      return memo;
    }
  );

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        color: 'blue',
        cursor: 'pointer',
        touchAction: 'none',
        position: 'absolute',
      }}
    >
      <h3 style={{ fontSize: '2rem' }}>Hello</h3>
    </animated.div>
  );
}

export default PullRelease;
