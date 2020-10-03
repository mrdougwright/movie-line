import API from '../api.ts'

export default class Movie {
  api: any
  constructor() {
    this.api = new API
  }

  getById(id: string) {
    return this.api.getMovieById(id)
  }

  getImagesById(id: string) {
    return this.api.getMovieImagesById(id)
  }
}