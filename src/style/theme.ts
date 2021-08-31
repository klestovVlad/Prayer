import {colors} from './colors';
// import {DefaultTheme} from 'styled-components/native';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     colors: Record<string, string>;
//   }
// }

interface Theme {
  colors: Record<string, string>;
}

export const theme: Theme = {
  colors: colors,
};
