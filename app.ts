import { opine, json, serveStatic, urlencoded } from 'https://deno.land/x/opine@0.22.2/mod.ts'
import { renderFileToString } from 'https://deno.land/x/dejs@0.7.0/mod.ts'
import { join, dirname } from 'https://deno.land/std@0.70.0/path/mod.ts'
// for Heroku
import { parse } from 'https://deno.land/std/flags/mod.ts';

import people from './controllers/people_ctrlr.ts'
import movies from './controllers/movies_ctrlr.ts'

const { args } = Deno
const DEFAULT_PORT = 3333
const argPort = parse(args).port
const listenPort = argPort ? Number(argPort) : DEFAULT_PORT

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


app.listen(listenPort)
console.log(`running on port ${listenPort}`)
