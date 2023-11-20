import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

const NoLogged = () => {
  const navigation = useNavigation();
  const navigateToForm = () => {
    navigation.navigate("Account");
  };
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para ver esta pantalla debes iniciar sesión</Text>
      <Button title="Ir al login" onPress={navigateToForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  }
})

export default NoLogged;
