import axios from "axios";

export const getPokeData = async () => {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  let response = await getAllPokemon(initialURL);
  let poke_list = await loadPokemon(response.results);
  return reducedData(poke_list);
};

const loadPokemon = async (data) => {
  let _pokemonData = await Promise.all(
    data.map(async (pokemon) => {
      let data = await getPokemon(pokemon);
      return data;
    })
  );
  return _pokemonData;
};

const getAllPokemon = async (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

const getPokemon = async ({ url }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

const reducedData = (poke_list) => {
  let indexed_pokemon_list = [];
  let pokemon_reduced_list = [];

  poke_list.forEach(
    ({ id, sprites, abilities, name, weight, height, types }) => {
      const reduced_element = {
        id,
        image: sprites.other.dream_world.front_default,
        artwork: sprites.other["official-artwork"].front_default,
        abilities,
        name,
        weight,
        height,
        types,
      };
      indexed_pokemon_list[id] = reduced_element;
      pokemon_reduced_list.push(reduced_element);
    }
  );
  return {
    pokemon_reduced_list,
    indexed_pokemon_list,
  };
};
