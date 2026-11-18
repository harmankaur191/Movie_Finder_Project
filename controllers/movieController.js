import { apiClient } from "../apiClient.js";


export const searchMovies = async(req, res)=>{
    try{
        const title = req.query.title;

        const response = await apiClient.get('/',{
            params :{ 
               s:title,
               apikey:process.env.OMDB_API_KEY

            }
        });
       
        res.json(response.data);
    }catch(e){
        res.status(500).send('Something went wrong');
    }
}

