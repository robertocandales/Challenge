import pockeReducer from './pockeReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  pokemones: pockeReducer,
});
