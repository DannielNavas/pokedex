import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getPokemonsApi } from '../api/pokemon';

const PokedexScreen = () => {
  useEffect(() => {
    (async() => {
      await loadPokemons();
    })()
  }, []);
  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView>
      <Text>PokedexScreen</Text>
    </SafeAreaView>
  );
}


export default PokedexScreen;
