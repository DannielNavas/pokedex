import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text } from 'react-native';
import { getPokemonFavoriteApi } from "../api/favorite";

const FavoriteScreen = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await getPokemonFavoriteApi();
      setFavorites(response);
    })()
  }, []);

  const getFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
    setFavorites(response);
  }

  return (
    <SafeAreaView>
      <Button title="Favorite" onPress={getFavorites} />
      <Text>FavoriteScreen</Text>
    </SafeAreaView>
  );
}

export default FavoriteScreen;
