export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface AddedMovie {
  Title: string;
  imdbID: string;
  quantity: number;
  date?: string;
}