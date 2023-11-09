import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import FavoriteScreen from "../screens/Favorite";

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default FavoriteNavigation;
