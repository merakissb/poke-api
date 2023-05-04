import axios from 'axios';

const POKE_API_URL = 'https://pokeapi.co/api/v2';
const MAX_POKEMONS = 151;

export const getPokemons = async () => {
 //throw new Error('Error fetching data');

  const response = await axios.get(`${POKE_API_URL}/pokemon?limit=${MAX_POKEMONS}`);
  const pokemons = await Promise.all(
    /*
      la función Promise.all se utiliza para manejar varias promesas simultáneamente.
      Se llama a la función map en la matriz response.data.results,
      que contiene información de cada Pokemon.
    */
    response.data.results.map(async (pokemon) => {
      const detailsResponse = await axios.get(pokemon.url);
      return {
        id: detailsResponse.data.id,
        name: detailsResponse.data.name,
        image: detailsResponse.data.sprites.front_default,
      };
    })
  );
  return pokemons;
};
