import 'dotenv/config'
import express from 'express';
import movieRoutes from './routes/movieRoutes.js'
const app =express();
const port=process.env.PORT || 3001;

app.get('/', (req, res)=>{
    console.log('Hello');
   res.send('Hello');
})
if(process.env.OMDB_API_KEY){
    console.log(null);
}
app.use('/api',movieRoutes);
app.use((err, req, res, next)=>{
    res.status(500).json(
        'something went wrong' )
})

app.listen(port, ()=>{
    console.log(`server is running at: `+ port);
})