import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  isPokemonFavorite,
  removePokemonFavorite,
} from "../../api/favorite";

const Favorite = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;
  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavorite(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    }
    )();
  }, [id]);
  const addFavorites = async () => {
    console.log(id);
    await addPokemonFavoriteApi(id);
  }
  const removeFavorites = async () => {
    console.log(id);
    await removePokemonFavorite(id);
  }
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorites : addFavorites}
      style={{ marginRight: 20 }}
    />
  );
}

const styles = StyleSheet.create({})

export default Favorite;
