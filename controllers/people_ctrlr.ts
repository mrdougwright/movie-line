import { Router } from 'https://deno.land/x/opine@0.22.2/mod.ts';
import People from '../models/people.ts'

const people = new Router();

people.get('/:id', async (req: { params: { id: string } }, res) => {
  const peopleModel = new People
  const person = await peopleModel.getById(req.params.id)
  const { cast: credits } = await peopleModel.getCredits(req.params.id)
  const data = {
    credits,
    person
  }
  res.render('people/show', { title: 'Person by id', data })
});

export default people;