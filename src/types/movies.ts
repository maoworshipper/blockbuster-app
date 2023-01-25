export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface AddedMovie extends Movie {
  action: string;
  date: string;
  quantity: number;
}