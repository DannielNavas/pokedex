import { capitalize } from 'lodash';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import getColorByPokemonType from '../../utils/getColorByPokemon';

const Header = ({ name, order, image, type }) => {
  const backgroundColor = getColorByPokemonType(type);

  return (
    <>
      <View style={[styles.bg, { backgroundColor }]} />
      <View style={styles.header}>
        <Text style={styles.name}>{capitalize(name)}</Text>
        <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
      </View>
      <SafeAreaView style={styles.content}>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: 400,
    width: "100%",
    position: "absolute",
    borderBottomLeftRadius: 300,
    borderBottomEndRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
  order: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  }
});

export default Header;
