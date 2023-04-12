import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Logout from './src/Logout';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
    headerShown: false
  }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#ddd',
    width: '100%',
  },
  containermain: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '15%',
    marginTop: '50%',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: '5%',
    borderRadius: 20,
  },
  header: {
    fontFamily: 'serif',
    color: '#000',
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 40,
  },
  label: {
    fontFamily: 'serif',
    fontSize: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    marginBottom: 20,
    paddingHorizontal: 15,
    fontFamily: 'serif',
    borderRadius: 20,
    borderWidth: 1,
    color: '#000',
    borderColor: '#6B728E',
  },
  /* buttonContainer: {
    backgroundColor: '#3f51b5',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  }, */
  linearGradient: {
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  error: {
    color: 'red',
    fontFamily: 'serif',
    marginTop: -15,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
});

export default App;