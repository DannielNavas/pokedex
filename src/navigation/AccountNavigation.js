import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { StyleSheet } from 'react-native';
import AccountScreen from '../screens/Account';

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Mi cuenta",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})

export default AccountNavigation;
