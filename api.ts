import { config } from "https://deno.land/x/dotenv/mod.ts";
const ENV = config()

export default class API {
  static getConfig() {
    const url = `https://api.themoviedb.org/3/configuration?api_key=${ENV.TMDB_API_KEY}`
    return API.callAPI(url)
  }

  static getMovieCredits(movieId: string) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${ENV.TMDB_API_KEY}`
    return API.callAPI(url)
  }

  static getMovieById(movieId: string) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ENV.TMDB_API_KEY}`
    return API.callAPI(url)
  }

  static getSimilar(movieId: string) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${ENV.TMDB_API_KEY}`
    return API.callAPI(url)
  }

  static searchMovies(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${ENV.TMDB_API_KEY}&query=${query}`
    return API.callAPI(url)
  }

  static searchPeople(query: string) {
    const url = `https://api.themoviedb.org/3/search/person?api_key=${ENV.TMDB_API_KEY}&query=${query}`
    return API.callAPI(url)
  }

  static getPersonById(personId: string) {
    const url = `https://api.themoviedb.org/3/person/${personId}?api_key=${ENV.TMDB_API_KEY}`
    return API.callAPI(url)
  }

  static getCastCredits(personId: number) {
    const url = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${ENV.TMDB_API_KEY}`
    return API.callAPI(url)
  }

  static getCrewCredits(personId: number) {
    const url = `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${ENV.TMDB_API_KEY}`
    return API.callAPI(url)
  }

  static async callAPI(url: string) {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
}