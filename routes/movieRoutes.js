import express from 'express';

import { searchMovies } from '../controllers/movieController.js';
import { getMoviesDetails } from '../controllers/movieController.js';
const router = express.Router();

router.get('/search',searchMovies);
 router.get('/movies/:id',getMoviesDetails);
export default router;