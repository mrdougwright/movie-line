import API from '../api.ts'

export default class Movie {
  api: any
  constructor() {
    this.api = new API
  }

  async getById(id: string) {
    const movieData = await this.api.getMovieById(id)
    // todo: cache getConfig and dynamically build image url:
    return movieData
  }

  async getSimilar(id: string) {
    const moviesData = await this.api.getSimilar(id)
    return moviesData
  }

  async getCredits(id: string) {
    const creditData = await this.api.getMovieCredits(id)
    return creditData
  }

  async search(query: string) {
    const resp = await this.api.searchMovies(query)
    return resp.results
  }
}