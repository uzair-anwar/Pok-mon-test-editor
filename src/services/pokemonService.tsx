import { POKEMON_API, POKEMON_API_IMAGE } from '../constant';
import axios from 'axios';

export const fetchPokemon = async () => {
  try {
    const response = await axios.get(`${POKEMON_API}`);
    return response.data.results.map((pokemon: any, index: number) => ({
      ...pokemon,
      sprite: `${POKEMON_API_IMAGE}${index + 1}.png`,
    }));
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
};