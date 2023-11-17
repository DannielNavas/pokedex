import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import * as Yup from 'yup';
import useAuth from '../../hooks/useAuth';
import { user, userDetails } from "../../utils/userDB";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formData) => {
      setError(null);
      const { username, password } = formData;
      if(username !== user.username || password !== user.password) {
        console.log('Login incorrecto');
        setError('Los datos ingresados son incorrectos');
        ToastAndroid.show(
          "El usuario o contraseña son incorrectos",
          ToastAndroid.SHORT
        );
      } else {
        login(userDetails);
        ToastAndroid.show(
          "Bienvenido",
          ToastAndroid.SHORT
        );
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Iniciar sesión" onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
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
  },
  error: {
    color: '#f00',
    textAlign: 'center',
    marginTop: 20,
  }
})

const initialValues = () => {
  return {
    username: '',
    password: ''
  }
}

const validationSchema = () => {
  return {
    username: Yup.string().required('El nombre de usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria')
  }
}

export default LoginForm;
