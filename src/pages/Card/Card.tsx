import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Card/styles'
import { Agents } from '../Home/Home'


const Card = ({name, IconImage, RoleImage, description, category}: Agents) => {
  return (
    <TouchableOpacity type={category}>
    <View style={styles.container}>
      <Image style={styles.icone} source={IconImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
        <Image style={styles.icone} source={RoleImage} />
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default Card
