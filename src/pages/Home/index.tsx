import { useEffect, useRef } from "react";
import { Card } from "../../components/Card/";
import { Container } from "../../components/Container";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useFetch } from "../../hooks/useFetch";
import { Movie } from "../../types/movies";

const Home = () => {
  const dataFetchedRef = useRef(false);
  const { data, error, fetchData } = useFetch();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error)
    return (
      <ErrorMessage
        message="Error al obtener listado. Intente nuevamente."
        showButton={true}
        buttonMessage="Aceptar"
        buttonAction={() => {
          fetchData();
        }}
      />
    );

  return (
    <>
      <Container>
        {data.length > 0 ?
          data.map((item: Movie) => (
            <Card
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              year={item.Year}
              type={item.Type}
              poster={item.Poster}
            />
          ))
          : <h2>Cargando...</h2>
        }
      </Container>
    </>
  );
};

export default Home;
