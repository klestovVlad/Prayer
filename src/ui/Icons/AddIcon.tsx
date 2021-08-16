import Svg, {Rect} from 'react-native-svg';

import React from 'react';

const AddIcon: React.FC = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Rect x="10" width="2" height="22" rx="1" fill="#72A8BC" />
      <Rect
        x="22"
        y="10"
        width="2"
        height="22"
        rx="1"
        transform="rotate(90 22 10)"
        fill="#72A8BC"
      />
    </Svg>
  );
};

export default AddIcon;
