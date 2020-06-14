import { pokemonesService } from '../../services/pockemonesService';

import {
  POCKEMONES_FETCHING,
  POCKEMONES_FETCHED,
  POCKEMONES_FETCH_FAILED,
  GET_NEXT_FIVE_POKEMONES,
  POKEMON_ABILITIES,
} from '../types/types';

export const getPokemones = (query_params) => async (dispatch, getState) => {
  dispatch({
    type: POCKEMONES_FETCHING,
  });
  try {
    const getPokemones = await pokemonesService.getPokemones(query_params);
    dispatch({
      type: POCKEMONES_FETCHED,
      payload: getPokemones,
    });
  } catch (error) {
    dispatch({
      type: POCKEMONES_FETCH_FAILED,
      payload: error,
    });
  }
};
export const nextFivePokemons = (query_params) => async (dispatch, getState) => {
  const { offset } = getState().pokemones;
  const nextOffset = offset + 5;

  try {
    dispatch(getPokemones({ offset: nextOffset, limit: 5 }));
    dispatch({
      type: GET_NEXT_FIVE_POKEMONES,
      payload: nextOffset,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokeInfo = (name) => async (dispatch, getState) => {
  try {
    const pokeInfo = await pokemonesService.getAbilities(name);
    dispatch({
      type: POKEMON_ABILITIES,
      payload: pokeInfo.data,
    });
  } catch (error) {
    console.log(error);
  }
};
