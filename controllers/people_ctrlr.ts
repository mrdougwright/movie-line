import { Router } from 'https://deno.land/x/opine@0.22.2/mod.ts';
import People from '../models/people.ts'

const people = new Router();

people.get('/:id', async (req: { params: { id: string } }, res) => {
  const people = new People
  const person = await people.getById(req.params.id)
  const credits = await people.getCredits(person)
  const movieData = people.movieChart(credits)
  const creditData = people.sortByReleaseDate(credits)
  const data = {
    credits: creditData,
    movieData,
    person,
  }
  res.render('people/show', { title: 'Person by id', data })
});

export default people;