import axios from 'axios';
import { handle_response } from './utils';

export const URL = 'https://pokeapi.co/api/v2/pokemon'; // todo: replace for an environment variable

/**
 *
 * @param options
 * @returns {Promise<AxiosResponse<any>>}
 */
function getPokemones(options) {
  const request_options = {
    method: 'get',
    url: URL,
    params: options,
  };

  return axios(request_options).then((value) => {
    return handle_response(value);
  });
}

export const getAbilities = async (name) => {
  return await axios.get(`${URL}/${name}`).catch((err) => err.response);
};

export const pokemonesService = {
  getPokemones,
  getAbilities,
};
