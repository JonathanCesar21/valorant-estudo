import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useGetData } from '../hooks/useGetData'

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

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})