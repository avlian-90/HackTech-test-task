import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import objectivesReducer from '../features/home/objectivesSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    objectives: objectivesReducer,
  },
});
