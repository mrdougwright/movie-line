import { Router } from 'https://deno.land/x/opine@0.22.2/mod.ts';
import Movie from '../models/movie.ts'

const movies = new Router();

movies.get('/:id', async (req: { params: { id: string } }, res) => {
  const movie = new Movie
  const data = await movie.getById(req.params.id)
  console.log("data: ", data)
  res.render('movies/show', { title: 'Movies by id', data })
});

export default movies;