import { api } from "../services";

export const useGetData = () => {
    const getAgents = async () => {
        try{
            const response = await api.get('/agents?language=pt-BR')
            console.log({response})
            return response.data
        } catch(error){
            console.log({error})
            return{error}
        }
    }

    return {
        getAgents,
    }
 }