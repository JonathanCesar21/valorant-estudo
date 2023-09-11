import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import styles from "./styles";

const Stack = createNativeStackNavigator();

const About = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <ScrollView>
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
          <View style={styles.col8}>
            <Text style={styles.title}>{item?.["displayName"]}</Text>
            <Text style={styles.subTitle}>
              {item?.["role"]?.["displayName"]}
            </Text>
          </View>
          <View style={styles.col2}>
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
        <View style={styles.containerSkills}>
          <View style={styles.row}>
            <View style={styles.col2}>
              <Image
                style={styles.iconeSkill}
                source={{ uri: item.abilities[0].displayIcon }}
              />
              <Text style={styles.skillName}>
                {item.abilities[0].displayName}
              </Text>
            </View>
            <View style={styles.col8}>
              <Text style={styles.skillDescription}>
                {item.abilities[0].description}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerSkills}>
          <View style={styles.row}>
            <View style={styles.col2}>
              <Image
                style={styles.iconeSkill}
                source={{ uri: item.abilities[1].displayIcon }}
              />
              <Text style={styles.skillName}>
                {item.abilities[1].displayName}
              </Text>
            </View>
            <View style={styles.col8}>
              <Text style={styles.skillDescription}>
                {item.abilities[1].description}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerSkills}>
          <View style={styles.row}>
            <View style={styles.col2}>
              <Image
                style={styles.iconeSkill}
                source={{ uri: item.abilities[2].displayIcon }}
              />
              <Text style={styles.skillName}>
                {item.abilities[2].displayName}
              </Text>
            </View>
            <View style={styles.col8}>
              <Text style={styles.skillDescription}>
                {item.abilities[2].description}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerSkills}>
          <View style={styles.row}>
            <View style={styles.col2}>
              <Image
                style={styles.iconeSkill}
                source={{ uri: item.abilities[3].displayIcon }}
              />
              <Text style={styles.skillName}>
                {item.abilities[3].displayName}
              </Text>
            </View>
            <View style={styles.col8}>
              <Text style={styles.skillDescription}>
                {item.abilities[3].description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
