import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import Card from "../Card/Card";
import styles from "./styles";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../About/About";

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  const { getAgents } = useGetData();
  const [loading, setLoading] = useState(true);
  const [agents, setAgents] = useState([]);

  const callGetAgents = async () => {
    const agentsResponse = await getAgents();

    if (!agentsResponse.error) {
      async () => {};
      setAgents(agentsResponse);
      setLoading(false);
    }
  };

  useEffect(() => {
    callGetAgents();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>teste</Text>
          </View>
        }
        keyExtractor={(item) => item?.["uuid"]}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={agents}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('About', {item})}>
            <View style={styles.container}>
              <Image
                style={styles.icone}
                source={{ uri: item?.["fullPortraitV2"] }}
              />
              <Text style={styles.titleCard}>{item?.["displayName"]}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};


export default Home;
