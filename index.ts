import { opine } from 'https://deno.land/x/opine@0.22.2/mod.ts'

const app = opine()

app.get('/', (req, res) => {
  res.send('deno sample')
})

app.listen(3333)
console.log('running on port 3333')
