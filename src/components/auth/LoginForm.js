import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginForm = () => {
  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput placeholder='Nombre de usuario' style={styles.input} autoCapitalize='none' />
      <TextInput placeholder='Contraseña' style={styles.input} autoCapitalize='none' secureTextEntry={true} />
      <Button title='Iniciar sesión' onPress={() => console.log('entrando')} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
})

export default LoginForm;
