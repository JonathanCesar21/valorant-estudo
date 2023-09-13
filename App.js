import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutAgents from './src/pages/AboutAgents/AboutAgents';
import AboutWeapons from './src/pages/AboutWeapons/AboutWeapons';
import Agents from './src/pages/Agents/Agents'
import Weapons from './src/pages/Weapons/Weapons';
import Home from './src/pages/Home/Home';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Weapons" component={Weapons} />
        <Stack.Screen options={{headerShown:false}} name="Agents" component={Agents} />
        <Stack.Screen options={{headerShown:false}} name="AboutAgents" component={AboutAgents} />
        <Stack.Screen options={{headerShown:false}} name="AboutWeapons" component={AboutWeapons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
