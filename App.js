import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/Home';
import About from './src/pages/About/About';
import { Agents } from './src/pages/Home/Home'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
