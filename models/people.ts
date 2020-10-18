import API from '../api.ts'

export default class People {
  api: any
  constructor() {
    this.api = new API
  }

  async getById(id: string) {
    const person = await this.api.getPersonById(id)
    return person
  }

  async getCredits(id: string) {
    const data = await this.api.getPersonCredits(id)
    return data
  }
}