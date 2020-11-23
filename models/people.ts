import API from '../api.ts'
import { Credit, CrewCredit, Person } from '../models/types.ts'

export default class People {
  api: any
  constructor() {
    this.api = new API
  }

  async getById(id: string) {
    const person = await this.api.getPersonById(id)
    return person
  }

  async getCredits(person: Person) {
    if (person.known_for_department === "Directing") {
      const { crew: credits } = await this.api.getCrewCredits(person.id)
      return credits.filter((movie: CrewCredit) => movie.job === "Director")
    } else {
      const { cast: credits } = await this.api.getCastCredits(person.id)
      return credits
    }
  }

  async search(query: string) {
    const resp = await this.api.searchPeople(query)
    return resp.results
  }

  movieChart(credits: Credit[]) {
    const sorted = credits.sort((a, b) => a.popularity - b.popularity)
    return sorted
  }

  sortByReleaseDate(credits: Credit[]) {
    return credits.slice().sort((a, b) => (
      Date.parse(b.release_date) - Date.parse(a.release_date)
    ))
  }
}