import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import styles from "./styles";

const Stack = createNativeStackNavigator();

const About = () => {
  const route = useRoute();
  const { item } = route.params;
  const [descricao, setDescricao] = useState(
    "Selecione alguma habilidade para ver sua descrição"
  );
  const arrayDeItens = [
    { abilities: { description: item.abilities[0].description } },
    { abilities: { description: item.abilities[1].description } },
    { abilities: { description: item.abilities[2].description } },
    { abilities: { description: item.abilities[3].description } },
  ];

  const exibirTexto = (indice) => {
    setDescricao(arrayDeItens[indice].abilities.description);
  };

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
        <View style={styles.row}>
          <View style={styles.col10}>
            <Text style={styles.titleSkills}>Habilidades</Text>
          </View>
        </View>
        <View style={styles.rowCenter}>
          <View style={styles.col2_5}>
            <TouchableOpacity onPress={() => exibirTexto(0)}>
              <View style={styles.boxIconeSkill}>
                <Image
                  style={styles.iconeSkill}
                  source={{ uri: item.abilities[0].displayIcon }}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.skillName}>
              {item.abilities[0].displayName}
            </Text>
          </View>
          <View style={styles.col2_5}>
            <TouchableOpacity onPress={() => exibirTexto(1)}>
              <View style={styles.boxIconeSkill}>
                <Image
                  style={styles.iconeSkill}
                  source={{ uri: item.abilities[1].displayIcon }}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.skillName}>
              {item.abilities[1].displayName}
            </Text>
          </View>
          <View style={styles.col2_5}>
            <TouchableOpacity onPress={() => exibirTexto(2)}>
              <View style={styles.boxIconeSkill}>
                <Image
                  style={styles.iconeSkill}
                  source={{ uri: item.abilities[2].displayIcon }}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.skillName}>
              {item.abilities[2].displayName}
            </Text>
          </View>
          <View style={styles.col2_5}>
            <TouchableOpacity onPress={() => exibirTexto(3)}>
              <View style={styles.boxIconeSkill}>
                <Image
                  style={styles.iconeSkill}
                  source={{ uri: item.abilities[3].displayIcon }}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.skillName}>
              {item.abilities[3].displayName}
            </Text>
          </View>
        </View>
        <View style={styles.skillDescriptionBox}>
          <Text style={styles.skillDescription}>{descricao}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
