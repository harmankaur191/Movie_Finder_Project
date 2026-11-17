import express from 'express';
import axios from 'axios';

const app =express();
const port=3000;

app.get('/', (req, res)=>{

    console.log('Hello');
})

app.listen(port, ()=>{
    console.log(`server is running at: `+port);
})