import React, { FC } from 'react';
import Svg, { Rect } from 'react-native-svg';

interface AddIcon {
  color: string;
}
export const AddIcon: FC<AddIcon> = ({ color }) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Rect x="10" width="2" height="22" rx="1" fill={color} />
      <Rect
        x="22"
        y="10"
        width="2"
        height="22"
        rx="1"
        transform="rotate(90 22 10)"
        fill={color}
      />
    </Svg>
  );
};
