import axios from "axios";
import { useState } from "react";
import { Movie } from "../types/movies";
import { orderArray } from "../utils/orderArray";

export const useFetch = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=5eec5adc&s=man&r=json"
      );
      response.data.Search.length > 0
        ? setData(orderArray(response.data.Search))
        : setError(true);
    } catch (error) {
      setError(true);
    }
  };

  return { data, error, fetchData };
};
