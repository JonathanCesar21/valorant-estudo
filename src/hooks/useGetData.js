import { api } from "../services";

export const useGetData = () => {
    const getAgents = async () => {
        try{
            const response = await api.get('/agents/?language=pt-BR&?isPlayableCharacter=true')
            return response.data.data
        } catch(error){
            console.log({error})
            return{error}
        }
    }

    return {
        getAgents,
    }
 }