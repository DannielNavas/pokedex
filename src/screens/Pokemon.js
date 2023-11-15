import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from "react-native";
import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/pokemon/Header';
import Stats from "../components/pokemon/Stats";
import Type from '../components/pokemon/Type';

const Pokemon = ({ route: { params }, navigation }) => {
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(pokemonId);
        setPokemon(response);
      } catch (error) {
        console.log(error);
        navigation.goBack();
      }
    })();
  }
    , [params]);

  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default Pokemon;
