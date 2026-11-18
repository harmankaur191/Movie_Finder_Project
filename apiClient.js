import axios from 'axios'
export const apiClient = axios.create({
    baseURL:'http://www.omdbapi.com/',
   params:{
        apikey:process.env.OMDB_API_KEY 
    }
});
apiClient.interceptors.request.use((config)=>{
    return config;
})
apiClient.interceptors.response.use((res)=>{
    return res;
})