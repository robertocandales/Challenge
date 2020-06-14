//import { v4 as uuidv4 } from 'uuid';
import {
  GET_NEXT_FIVE_POKEMONES,
  POCKEMONES_FETCHING,
  POCKEMONES_FETCHED,
  POCKEMONES_FETCH_FAILED,
  POKEMON_ABILITIES,
} from './../types/types';

const initialState = {
  pokemones: [],
  pokeInfo: [],
  loadding: true,
  limit: 5,
  offset: 1,
};
export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case POCKEMONES_FETCHING:
      return { ...state, loadding: true };
    case POCKEMONES_FETCHED:
      return { ...state, loadding: false, pokemones: action.payload };
    case POCKEMONES_FETCH_FAILED:
      return { ...state, loadding: false, error: action.payload };
    case GET_NEXT_FIVE_POKEMONES:
      return {
        ...state,
        offset: action.payload,
      };
    case POKEMON_ABILITIES:
      return { ...state, pokeInfo: action.payload };

    //case DELETE_ITEM:
    //  return { ...state, items: state.items.filter((item) => item._id !== action.payload) };

    default:
      return state;
  }
}
