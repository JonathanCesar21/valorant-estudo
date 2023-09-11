import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Agents } from "../Home/Home";

import styles from "./styles";

const Stack = createNativeStackNavigator();

const About = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerImagemPrincipal}>
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{ opacity: 0.85 }}
          resizeMode="stretch"
          source={{ uri: item?.["background"] }}
        >
          <Image
            style={styles.imagemPersonagem}
            source={{ uri: item?.["fullPortraitV2"] }}
          />
        </ImageBackground>
      </View>
      <View style={styles.row}>
        <View style={styles.col7}>
          <Text style={styles.title}>{item?.["displayName"]}</Text>
          <Text style={styles.subTitle}>{item?.["role"]?.["displayName"]}</Text>
        </View>
        <View style={styles.col3}>
          <Image
            style={styles.iconeRole}
            source={{ uri: item?.["role"]?.["displayIcon"] }}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col10}>
          <Text style={styles.description}>{item?.["description"]}</Text>
        </View>
      </View>
      <View style={styles.row}>
        
      </View>
    </View>
  );
};

export default About;
