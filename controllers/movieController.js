import axios from "axios";
 const apiClient = axios.create({
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


export const searchMovies = async(req, res)=>{
    try{
        const title = req.query.title;

        const response = await apiClient.get('/',{
            params :{ 
                apikey:process.env.OMDB_API_KEY.trim(),
               s:title
              

            }
        });
    //    const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}`)
        res.json(response.data);
    }catch(e){
        if(e.response){
            console.error(e.response.data)
        }
        res.status(500).send('Something went wrong');
    }
}


export const getMoviesDetails = async(req, res)=>{
    try{

        const id = req.params.id;
        const response = await apiClient.get('/',{
            params:{
                apikey:process.env.OMDB_API_KEY.trim(),
                i:id
                
            }
        });
        res.json(response.data);

    }catch(e){
        res.status(500).send("Something went worng")

    }
}
