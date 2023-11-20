import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { getPokemonFavoriteApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import NoLogged from "../components/NoLogged";
import PokemontList from "../components/PokemontList";
import useAuth from "../hooks/useAuth";

const FavoriteScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi();
          console.log(response);
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetail = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              image: pokemonDetail.sprites.other["official-artwork"].front_default,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
            });
          }
          setPokemons(pokemonsArray);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [auth])
  );

  return !auth ? (
    <NoLogged />
  ) : (
    <PokemontList pokemons={pokemons} loadPokemons={() => console.log('load')}  />
  );
}

export default FavoriteScreen;
