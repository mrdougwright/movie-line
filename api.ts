import { config } from "https://deno.land/x/dotenv/mod.ts";
const ENV = config()

export default class API {
  getConfig() {
    const url = `https://api.themoviedb.org/3/configuration?api_key=${ENV.TMDB_API_KEY}`
    return this.callAPI(url)
  }

  getMovieById(id: string) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${ENV.TMDB_API_KEY}`
    return this.callAPI(url)
  }

  getSimilar(movieId: string) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${ENV.TMDB_API_KEY}`
    return this.callAPI(url)
  }

  searchMovies(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${ENV.TMDB_API_KEY}&query=${query}`
    return this.callAPI(url)
  }

  async callAPI(url: string) {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
}