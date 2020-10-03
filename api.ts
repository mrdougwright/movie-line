import { config } from "https://deno.land/x/dotenv/mod.ts";
const ENV = config()

export default class API {
  async getMovieById(id: string) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${ENV.TMDB_API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  async getMovieImagesById(id: string) {
    console.log(id)
    { }
  }
}