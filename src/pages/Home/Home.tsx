import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, ImageProps } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useGetData } from '../../hooks/useGetData'
import { ListItem } from 'react-native-elements'
import Card from '../Card/Card'

const Home = () => {
    const {getAgents} = useGetData()
    const [loading, setLoading] = useState(true)
    const [agents, setAgents] = useState([])
  
    const callGetAgents = async() =>{
        const agentsResponse = await getAgents()

        if(!agentsResponse.error){
          async() =>{

          }
            setAgents(agentsResponse)
            setLoading(false)
        }
    }

    useEffect(()=>{
        callGetAgents()
    },[])
    
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={agents}
        renderItem={({item}) => 
        <Card name={item['displayName']} IconImage={{uri:item['displayIcon']}} description={item['description']} RoleImage={{uri:item?.['role']?.['displayIcon']}} category={item?.['role']?.['displayName']}></Card>
        }
      /> 
    </SafeAreaView>
  )
}
export interface Agents {
  name: string;
  IconImage: ImageProps["source"];
  RoleImage: ImageProps["source"];
  description: string;
  category: string;
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
    icon:{
      width: 20,
      height: 20,
    }
  });
  