import { api } from "../services";

export const useGetData = () => {
    const getAgents = async () => {
        try{
            const response = await api.get('/agents/e370fa57-4757-3604-3648-499e1f642d3f?language=pt-BR')
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