import { CrewMember } from '../models/types.ts'

export default class Movie {
  static filterEssentialCrew(people: CrewMember[]) {
    const essentialRoles = ["Director", "Producer", "Screenplay", "Editor", "Director of Photography"]
    const crew: CrewMember[] = []
    essentialRoles.forEach(role => {
      const person = people.find(p => p.job === role)
      if (person) return crew.push(person)
    })
    return crew
  }
}
