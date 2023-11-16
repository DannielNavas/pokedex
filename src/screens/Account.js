import React from 'react';
import { View } from 'react-native';
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';

const AccountScreen = () => {
  const auth = null
  return (
    <View>
      {auth ? (
        <UserData />
      ) : (
        <LoginForm />
      )}
    </View>
  );
}


export default AccountScreen;
