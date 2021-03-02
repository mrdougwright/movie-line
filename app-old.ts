import { opine, json, serveStatic, urlencoded } from 'https://deno.land/x/opine@1.1.0/mod.ts'
import { renderFileToString } from 'https://deno.land/x/dejs@0.9.3/mod.ts'
import { join, dirname } from 'https://deno.land/std@0.89.0/path/mod.ts'
// for Heroku
import { parse } from 'https://deno.land/std/flags/mod.ts';

import people from './routes/people.ts'
import movies from './routes/movies.ts'

const { args, exit } = Deno
const argPort = parse(args).port
const port = argPort ? Number(argPort) : 3333

if (isNaN(port)) {
  console.log(`Port: ${port} is not a number.`)
  exit(1)
}

const app = opine()
const __dirname = dirname(import.meta.url)

app.engine('.html', renderFileToString)
app.use(serveStatic(join(__dirname, 'public')))


// app.use(json())

// used for parsing form input
app.use(urlencoded())

app.set('view engine', 'html')

app.get('/', (req, res) => {
  res.render('index', { title: 'Deno Sample' })
})

app.use('/people', people)
app.use('/movies', movies)


app.listen(port)
console.log(`running on port ${port}`)
