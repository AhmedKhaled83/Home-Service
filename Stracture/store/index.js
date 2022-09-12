import {configureStore} from '@reduxjs/toolkit';
import cycle from './CycleAppSlice';

const store = configureStore({
  reducer: {cycle},
});

export default store;
