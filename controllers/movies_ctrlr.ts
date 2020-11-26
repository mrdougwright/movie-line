import { Router } from 'https://deno.land/x/opine@0.22.2/mod.ts';
import Movie from '../models/movie.ts'
import API from '../api.ts';

const movies = new Router();

movies.get('/', async (req, res) => {
  res.render('results', { title: 'Search for movies', data: undefined })
});

movies.get('/:id', async (req: { params: { id: string } }, res) => {
  const movieInfo = await API.getMovieById(req.params.id)
  const { results: movies } = await API.getSimilar(req.params.id)
  const credits = await API.getMovieCredits(req.params.id)
  const crew = Movie.filterEssentialCrew(credits.crew)

  const data = {
    credits,
    crew,
    ...movieInfo,
    movies
  }

  res.render('movies/show', { title: 'Movies by id', data })
});

movies.post('/search', async (req: { parsedBody: { query: string } }, res: any) => {
  const { results: movies } = await API.searchMovies(req.parsedBody.query)
  const { results: people } = await API.searchPeople(req.parsedBody.query)
  const data = {
    people,
    movies,
  }
  res.render('results', { title: 'Movies & People list', data })
})

export default movies;