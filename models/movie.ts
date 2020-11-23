import API from '../api.ts'
import { CrewMember } from '../models/types.ts'

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
    const resP = await this.api.searchPeople(query)
    console.log(resP)
    console.log(resp)
    return resp.results.concat(resP.results)
  }

  getEssentialCrew(people: CrewMember[]) {
    const essentialRoles = ["Director", "Producer", "Screenplay", "Editor", "Director of Photography"]
    const crew: CrewMember[] = []
    essentialRoles.forEach(role => {
      const person = people.find(p => p.job === role)
      if (person) return crew.push(person)
    })
    return crew
  }
}