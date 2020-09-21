import API from '../api.ts'

export default class Movie {
  getById(id: string) {
    const api = new API
    return api.getMovieById(id)
  }
}