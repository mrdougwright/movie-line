import API from '../api.ts'

export default class Movie {
  api: any
  constructor() {
    this.api = new API
  }

  async getById(id: string) {
    const movieData = await this.api.getMovieById(id)
    // todo: cache getConfig and dynamically build this url:
    const posterImage = `https://image.tmdb.org/t/p/w300${movieData.poster_path}`
    return {
      ...movieData,
      posterImage: posterImage
    }
  }

  async search(query: string) {
    const resp = await this.api.searchMovies(query)
    console.log("search resp: ", resp)
    return resp.results
  }
}