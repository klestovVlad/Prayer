import { DefaultTheme } from 'styled-components/native';

import { colors } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>;
  }
}

export const theme: DefaultTheme = {
  colors: colors,
};
