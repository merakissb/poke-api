import axios from 'axios';

const POKE_API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async () => {
  const response = await axios.get(`${POKE_API_URL}/pokemon?limit=151`);
  const pokemons = await Promise.all(
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
