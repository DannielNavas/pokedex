import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default FavoriteNavigation;
