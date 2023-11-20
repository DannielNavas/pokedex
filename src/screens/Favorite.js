import React from "react";
import { Button, SafeAreaView, Text } from 'react-native';
import { getPokemonFavoriteApi } from "../api/favorite";

const FavoriteScreen = () => {
  const getFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }

  return (
    <SafeAreaView>
      <Button title="Favorite" onPress={getFavorites} />
      <Text>FavoriteScreen</Text>
    </SafeAreaView>
  );
}

export default FavoriteScreen;
