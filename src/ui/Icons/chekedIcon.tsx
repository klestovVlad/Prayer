import Svg, {Rect} from 'react-native-svg';

import React from 'react';

export const ChekedIcon: React.FC = () => {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Rect
        x="16.3741"
        y="4"
        width="3"
        height="14.3279"
        rx="1.5"
        transform="rotate(45 16.3741 4)"
        fill="#72A8BC"
      />
      <Rect
        x="10.4853"
        y="14.1314"
        width="3"
        height="9"
        rx="1.5"
        transform="rotate(135 10.4853 14.1314)"
        fill="#72A8BC"
      />
    </Svg>
  );
};
