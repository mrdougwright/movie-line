import { Router } from 'https://deno.land/x/opine@0.22.2/mod.ts';

const movies = new Router();
// movies routes
movies.get('/:id', (req: { params: { id: string } }, res) => {
  console.log(req.params)
  res.render('movies/show', { title: 'Movies by id', id: req.params.id })
});


export default movies;