import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useGetData } from '../hooks/useGetData'
import { ListItem } from 'react-native-elements'

const Home = () => {
    const {getAgents} = useGetData()
    const [loading, setLoading] = useState(true)
    const [agents, setAgents] = useState([])

    const callGetAgents = async() =>{
        const agentsResponse = await getAgents()

        if(!agentsResponse.error){
            setAgents(agentsResponse)
            setLoading(false)
        }
    }

    useEffect(()=>{
        callGetAgents()
    },[])

    console.log(agents)
  return (
    <SafeAreaView style={styles.container}>
        <Text>teasdsa</Text>
      <FlatList
        data={agents}
        renderItem={({}) => <Text>title=teste</Text>}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  