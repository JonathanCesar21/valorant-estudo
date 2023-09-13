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
  
  const Stack = createNativeStackNavigator();
  
  const Home = ({ navigation }) => {

    return (
      <SafeAreaView style={styles.container}>
        <View>
            
        </View>
      </SafeAreaView>
    );
  };
  
  export default Home;
  