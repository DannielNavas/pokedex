import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemontList = ({ pokemons }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 15,
  },
})

export default PokemontList;
