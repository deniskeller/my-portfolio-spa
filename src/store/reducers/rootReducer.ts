import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { projectReducer } from './projectReducer';

export const rootReducer = combineReducers({
  modal: modalReducer,
  project: projectReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
