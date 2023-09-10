import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { ListItem } from "react-native-elements";
import Card from "../Card/Card";
import styles from "./styles";

const Home = () => {
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
          <Card
            name={item["displayName"]}
            IconImage={{ uri: item["fullPortraitV2"] }}
            description={item["description"]}
            RoleImage={{ uri: item?.["role"]?.["displayIcon"] }}
            category={item?.["backgroundGradientColors[0]"]}
          ></Card>
        )}
      />
    </SafeAreaView>
  );
};
export interface Agents {
  name: string;
  IconImage: ImageProps["source"];
  RoleImage: ImageProps["source"];
  description: string;
  category: string;
}

export default Home;
