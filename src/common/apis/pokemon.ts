import { baseUrl } from '../utils/baseUrl';

export const getPokemons = async () => {
  try {
    const response = await baseUrl({
      url: 'pokemon',
      method: 'get',
    });

    return response.data.results

  } catch (error) {
    console.log(error);
  }
}