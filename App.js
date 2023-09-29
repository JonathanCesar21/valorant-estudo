import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutAgents from './src/pages/AboutAgents/AboutAgents';
import AboutWeapons from './src/pages/AboutWeapons/AboutWeapons';
import Agents from './src/pages/Agents/Agents'
import Weapons from './src/pages/Weapons/Weapons';
import Home from './src/pages/Home/Home';
import VideoSkin from './src/pages/VideoSkins/VideoSkin';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerTintColor:'#fff', headerTitleAlign: 'center', title:"Valorant Guia", headerStyle:{backgroundColor:'#0f1822'}}} name="Home" component={Home} />
        <Stack.Screen options={{headerTintColor:'#fff', headerTitleAlign: 'center', title:"Armas", headerStyle:{backgroundColor:'#0f1822'}}} name="Weapons" component={Weapons} />
        <Stack.Screen options={{headerTintColor:'#fff', headerTitleAlign: 'center', title:"Agentes", headerStyle:{backgroundColor:'#0f1822'}}} name="Agents" component={Agents} />
        <Stack.Screen options={{headerTintColor:'#fff', headerTitleAlign: 'center', title:"", headerStyle:{backgroundColor:'#0f1822'}}} name="AboutAgents" component={AboutAgents} />
        <Stack.Screen options={{headerTintColor:'#fff', headerTitleAlign: 'center', title:"", headerStyle:{backgroundColor:'#0f1822'}}} name="AboutWeapons" component={AboutWeapons} />
        <Stack.Screen options={{headerTintColor:'#fff', headerTitleAlign: 'center', title:"", headerStyle:{backgroundColor:'#0f1822'}}} name="VideoSkin" component={VideoSkin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
