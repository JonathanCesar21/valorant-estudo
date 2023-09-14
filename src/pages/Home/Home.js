import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import styles from "./styles";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import agentsImg from '../../assets/imgs/agents.png'
import weaponsImg from '../../assets/imgs/weapons.png'
import backgroundImg from '../../assets/imgs/backgroundRed.png'

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerCard}>
        <TouchableOpacity onPress={() => navigation.navigate("Agents")}>
          <View style={styles.row}>
            <View style={styles.col5}>
              <Text style={styles.title}>AGENTES</Text>
            </View>
            <View style={styles.col5}>
              <ImageBackground source={backgroundImg}>
                <Image
                  resizeMode="contain"
                  style={styles.icone}
                  source={agentsImg}>
                </Image>
              </ImageBackground>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCard}>
        <TouchableOpacity onPress={() => navigation.navigate("Weapons")}>
          <View style={styles.row}>
            <View style={styles.col5}>
              <Text style={styles.title}>ARMAS</Text>
            </View>
            <View style={styles.col5}>
              <ImageBackground source={backgroundImg}>
                <Image
                  resizeMode="contain"
                  style={styles.icone}
                  source={weaponsImg} >
                </Image>
              </ImageBackground>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
};

export default Home;
