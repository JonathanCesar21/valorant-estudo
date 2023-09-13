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

const Weapons = ({ navigation }) => {
    const { getWeapons } = useGetData();
    const [loading, setLoading] = useState(true);
    const [weapons, setWeapons] = useState([]);

    const callGetWeapons = async () => {
        const weaponsResponse = await getWeapons();

        if (!weaponsResponse.error) {
            async () => { };
            setWeapons(weaponsResponse);
            setLoading(false);
        }
    };

    useEffect(() => {
        callGetWeapons();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.title}>Teste Alpha</Text>
                    </View>
                }
                keyExtractor={(item) => item?.["uuid"]}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={weapons}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AboutWeapons", { item })}
                    >
                        <View style={styles.boxFlatList}>
                            <Image
                                resizeMode="contain"
                                style={styles.icone}
                                source={{ uri: item?.["displayIcon"] }}
                            />
                            <Text style={styles.titleCard}>{item?.["displayName"]}</Text>
                        </View>
                    </TouchableOpacity>
                )
                }
            />
        </SafeAreaView >
    );
};

export default Weapons;
