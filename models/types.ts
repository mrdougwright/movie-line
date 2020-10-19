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
