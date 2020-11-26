import API from '../api.ts'
import People from '../models/people.ts'
import { Router } from 'https://deno.land/x/opine@0.22.2/mod.ts';

const people = new Router();

people.get('/:id', async (req: { params: { id: string } }, res) => {
  const person = await API.getPersonById(req.params.id)
  const credits = await People.getCredits(person)
  const movieData = People.sortByPopularity(credits)
  const creditData = People.sortByReleaseDate(credits)
  const data = {
    credits: creditData,
    movieData,
    person,
  }
  res.render('people/show', { title: 'Person by id', data })
});

export default people;