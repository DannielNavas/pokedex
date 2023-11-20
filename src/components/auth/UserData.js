import { useFocusEffect } from '@react-navigation/native';
import { size } from 'lodash';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getPokemonFavoriteApi } from '../../api/favorite';
import useAuth from "../../hooks/useAuth";


const UserData = () => {
  const [total, setTotal] = useState(0);
  const { auth, logout } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi(auth);
          setTotal(size(response));
        }
        catch (error) {
          console.log(error);
        }
      })()
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total favoritos" text={`${total} pokemons`} />
      </View>

      <Button title="Desconectarse" onPress={logout} />
    </View>
  );
}

const ItemMenu = ({title, text}) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 30,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogoun: {
    paddingTop: 20,
  },
});

export default UserData;
