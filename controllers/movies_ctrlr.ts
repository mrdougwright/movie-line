import { Router } from 'https://deno.land/x/opine@0.22.2/mod.ts';
import Movie from '../models/movie.ts'

const movies = new Router();

movies.get('/', async (req, res) => {
  res.render('movies/search', { title: 'Search for movies', data: undefined })
});

movies.get('/:id', async (req: { params: { id: string } }, res) => {
  const movie = new Movie
  const movieInfo = await movie.getById(req.params.id)
  const { results: movies } = await movie.getSimilar(req.params.id)
  const credits = await movie.getCredits(req.params.id)
  const crew = movie.getEssentialCrew(credits.crew)

  const data = {
    credits,
    crew,
    ...movieInfo,
    movies
  }

  res.render('movies/show', { title: 'Movies by id', data })
});

movies.post('/search', async (req: { parsedBody: { query: string } }, res: any) => {
  const movie = new Movie
  const data = await movie.search(req.parsedBody.query)
  res.render('movies/search', { title: 'Movies list', data })
})

export default movies;