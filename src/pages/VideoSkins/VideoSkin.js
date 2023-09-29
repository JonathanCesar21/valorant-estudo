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
import {Video} from 'expo-av';


const Stack = createNativeStackNavigator();

const VideoSkin = () => {
    const route = useRoute();
    const { item } = route.params;
    const urlVideo = item.item.levels[0].streamedVideo
    const nome = item.item
    const video = React.useRef(null);
    

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{item.displayName}</Text>
                <Video 
                ref={video}
                style={styles.video}
                useNativeControls
                resizeMode="contain"
                isLooping
                shouldPlay
                source={{uri:item.item.levels[0].streamedVideo}}
                />
            </View>
        </View>
    );
};

export default VideoSkin;
