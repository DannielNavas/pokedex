import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { getPokemonDetailsByUrlApi, getPokemonsApi } from '../api/pokemon';
import PokemontList from '../components/PokemontList';

const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async() => {
      await loadPokemons();
    })()
  }, []);
  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          image: pokemonDetail.sprites.other['official-artwork'].front_default,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView>
      <PokemontList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}


export default PokedexScreen;
