import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './src/screens/homeScreen';
import PlayersScreen from './src/screens/playersScreen';
import ChatScreen from './src/screens/chatScreen';
import { StatusBar, StyleSheet } from 'react-native';
import Header from './src/components/Header';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function TelaPrincipal() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}
function TelaJogadores() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Jogadores</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Header />, 
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          drawerStyle: {
            backgroundColor: '#111',
            width: 200,
          },
          drawerLabelStyle: {
            color: '#fff',
            fontSize: 18, 
          },
          drawerItemStyle: {
            marginVertical: 5,
          },
          drawerPosition: 'right',
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Estatísticas" component={PlayersScreen} />
        <Drawer.Screen name="Chat" component={ChatScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
  },
})
