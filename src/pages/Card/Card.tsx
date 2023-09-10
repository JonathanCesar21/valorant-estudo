import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Card/styles'
import { Agents } from '../Home/Home'

const Card = ({name, IconImage, RoleImage, description, category}: Agents) => {
  return (
    <TouchableOpacity>
    <View style={styles.container}>
        <Image style={styles.icone} source={IconImage} />
        <Text style={styles.title}>{name}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Card
