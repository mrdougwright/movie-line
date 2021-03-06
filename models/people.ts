import API from '../api.ts'
import { Credit, CrewCredit, Person } from '../models/types.ts'

export default class People {
  static async getCredits(person: Person) {
    if (person.known_for_department === "Directing") {
      const { crew: credits } = await API.getCrewCredits(person.id)
      return credits.filter((movie: CrewCredit) => movie.job === "Director")
    } else {
      const { cast: credits } = await API.getCastCredits(person.id)
      return credits.filter((movie: Credit) => movie.poster_path)
    }
  }

  // was used by movie graph
  static sortByPopularity(credits: Credit[]) {
    const sorted = credits.sort((a, b) => a.popularity - b.popularity)
    return sorted
  }

  static sortByReleaseDate(credits: Credit[]) {
    return credits.slice().sort((a, b) => (
      Date.parse(b.release_date) - Date.parse(a.release_date)
    ))
  }
}
