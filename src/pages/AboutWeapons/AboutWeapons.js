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

const AboutWeapons = () => {
    const route = useRoute();
    const { item } = route.params;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerImagemPrincipal}>
                    <Image
                        style={styles.imageWeapon}
                        source={{ uri: item?.["displayIcon"] }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default AboutWeapons;
