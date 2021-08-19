import {createStore} from '@reduxjs/toolkit';
import reducer from './slice';
export const state = createStore(reducer);

export default reducer;
