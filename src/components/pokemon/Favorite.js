import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavoriteApi } from '../../api/favorite';

const Favorite = ({ id }) => {
  const addFavorites = async () => {
    console.log(id);
    await addPokemonFavoriteApi(id);
  }
  return (
    <Icon name="heart" color="#fff" size={20} onPress={addFavorites} style={{marginRight: 20}} />
  );
}

const styles = StyleSheet.create({})

export default Favorite;
