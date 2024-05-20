import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    FlatList
} from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import * as Progress from 'react-native-progress';
import styles from "./styles";


const Stack = createNativeStackNavigator();


const AboutWeapons = ({navigation}) => {
    const route = useRoute();
    const { item } = route.params;
    const skins = item.skins
    const dataShop = item.shopData
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerBody}>
                    <View style={styles.containerImagemPrincipal}>
                        <Image
                            resizeMode="contain"
                            style={styles.imageWeapon}
                            source={{ uri: item?.["displayIcon"] }}
                        />
                    </View>
                    <View style={styles.containerName}>
                        <View style={styles.row}>
                            <View style={styles.col10}>
                                <Text style={styles.title}>{item?.["displayName"]}</Text>
                                {dataShop && <Text style={styles.subTitle}>
                                    {item.shopData.categoryText}
                                </Text>
                                }
                            </View>
                        </View>
                    </View>
                    {dataShop != null && <View>
                        <View style={styles.row}>
                            <View style={styles.col5}>
                                <Text style={styles.titleStats}>Fire Rate:</Text>
                            </View>
                            <View style={styles.col5}>
                                <Text style={styles.titleStatsNumbers}>{item.weaponStats.fireRate}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.col5}>
                                <Text style={styles.titleStats}>Preço:</Text>
                            </View>
                            <View style={styles.col5}>
                                <Text style={styles.titleStatsNumbers}>{item.shopData.cost}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.col5}>
                                <Text style={styles.titleStats}>Cartucho:</Text>
                            </View>
                            <View style={styles.col5}>
                                <Text style={styles.titleStatsNumbers}>{item.weaponStats.magazineSize}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.col5}>
                                <Text style={styles.titleStats}>Recarregar:</Text>
                            </View>
                            <View style={styles.col5}>
                                <Text style={styles.titleStatsNumbers}>{item.weaponStats.reloadTimeSeconds}/segundos</Text>
                            </View>
                        </View>
                    </View>
                    }
                </View>
            </ScrollView>
            <View style={styles.containerSkins}>
                <Text style={styles.title}>Skins</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    data={skins}
                    keyExtractor={(item) => item.uuid}
                    renderItem={(item) => (
                        <TouchableOpacity
                        onPress={() => navigation.navigate("VideoSkin", { item })}
                        >
                            <View style={styles.boxFlatList}>
                                <Image
                                    resizeMode="contain"
                                    style={styles.iconeSkins}
                                    source={{ uri: skins[item.index].displayIcon }}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                    }
                />
            </View>
        </View>
    );
};

export default AboutWeapons;
