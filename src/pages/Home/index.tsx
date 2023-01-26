import { useEffect, useRef } from "react";
import { Button } from "../../components/UI";
import { Card } from "../../components/Card/";
import { Container, ContainerChild } from "../../components/Container";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Input } from "../../components/Input";
import { useFetch } from "../../hooks/useFetch";
import { Movie } from "../../types/movies";
import { useCart } from "../../hooks/useCart";

const labels = {
  addToCart: "Agregar al carrito",
  rent: "Rentar",
  buy: "Comprar",
  return: "<",
};

const Home = () => {
  const dataFetchedRef = useRef(false);
  const { data, error, fetchData } = useFetch();
  const {
    selectedItem,
    handleAddToCart,
    cancelOrder,
    handlerRequest,
    updateCart,
    handlerInputChange,
  } = useCart(data);

  const showRequestFields = () => {
    return (
      <ContainerChild>
        {selectedItem.action === "rent" && (
          <Input
            type="date"
            name="date"
            label="Fecha de inicio"
            value={selectedItem.date}
            onChange={handlerInputChange}
          />
        )}
        <Input
          type="number"
          name="quantity"
          label="Cantidad"
          size="small"
          value={selectedItem.quantity}
          onChange={handlerInputChange}
        />
        <Button onClick={() => updateCart()}>
          {labels[selectedItem.action as keyof typeof labels]}
        </Button>
      </ContainerChild>
    );
  };

  const showButtonsSection = () => {
    if (selectedItem.id !== "") {
      return (
        <ContainerChild>
          <Button onClick={() => cancelOrder(selectedItem.id)}>
            {labels.return}
          </Button>
          <Button onClick={() => handlerRequest("rent")}>{labels.rent}</Button>
          <Button onClick={() => handlerRequest("buy")}>{labels.buy}</Button>
        </ContainerChild>
      );
    }
  };

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
        {data.length > 0 ? (
          data.map((item: Movie) => (
            <Card
              key={item.imdbID}
              title={item.Title}
              year={item.Year}
              type={item.Type}
              poster={item.Poster}
            >
              <>
                {selectedItem.id !== item.imdbID && (
                  <Button onClick={() => handleAddToCart(item.imdbID)}>
                    {labels.addToCart}
                  </Button>
                )}
                {selectedItem.id === item.imdbID &&
                  selectedItem.action === "" &&
                  showButtonsSection()}
                {selectedItem.action !== "" &&
                  selectedItem.id === item.imdbID &&
                  showRequestFields()}
              </>
            </Card>
          ))
        ) : (
          <h2>Cargando...</h2>
        )}
      </Container>
    </>
  );
};

export default Home;
