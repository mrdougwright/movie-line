import { Router } from 'https://deno.land/x/opine@0.22.2/mod.ts';
import Movie from '../models/movie.ts'

const movies = new Router();

movies.get('/', async (req, res) => {
  res.render('movies/search', { title: 'Search for movies' })
});

movies.get('/:id', async (req: { params: { id: string } }, res) => {
  const movieModel = new Movie
  const movie = await movieModel.getById(req.params.id)
  const { results: movies } = await movieModel.getSimilar(req.params.id)
  const credits = await movieModel.getCredits(req.params.id)
  const data = {
    credits,
    ...movie,
    movies
  }
  res.render('movies/show', { title: 'Movies by id', data })
});

movies.post('/search', async (req: { parsedBody: { query: string } }, res: any) => {
  const movie = new Movie
  const data = await movie.search(req.parsedBody.query)
  res.render('movies/index', { title: 'Movies list', data })
})

export default movies;