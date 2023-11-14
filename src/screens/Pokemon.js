import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPokemonDetailsApi } from '../api/pokemon';

const Pokemon = ({ route: { params }, navigation }) => {
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(pokemonId);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }
    , [params]);

  if (!pokemon) return null;
  return (
    <View>
      <Text>Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Pokemon;
