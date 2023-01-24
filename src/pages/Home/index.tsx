import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Home = () => {
  const [data, setData] = useState([]); // [data, setData
  const dataFetchedRef = useRef(false);

  const fetchData = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=5eec5adc&s=man&r=json")
      .then((response) => {
        console.log(response.data.Search);
        setData(response.data.Search);
      });
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        {data.length > 0 &&
          data.map((item: Movie) => (
            <Card
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              year={item.Year}
              type={item.Type}
              poster={item.Poster}
            />
          ))}
      </Container>
    </>
  );
};

export default Home;
