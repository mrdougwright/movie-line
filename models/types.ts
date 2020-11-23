export type CrewMember = {
  credit_id: string,
  department: string,
  gender: number,
  id: number,
  job: string,
  name: string,
  profile_path: string
}

export type Credit = {
  adult: boolean,
  backdrop_path: string,
  character: string,
  credit_id: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export type CrewCredit = {
  backdrop_path: string,
  credit_id: string,
  department: string,
  episode_count: number,
  first_air_date: string,
  id: number,
  job: string,
  media_type: string,
  name: string,
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  vote_average: number,
  vote_count: number
}

export type Person = {
  adult: boolean,
  also_known_as: string[],
  biography: string,
  birthday: string,
  deathday: string | null,
  homepage: string | null,
  id: number,
  imdb_id: string,
  known_for_department: string,
  name: string,
  place_of_birth: string,
  popularity: number,
  profile_path: string
}
