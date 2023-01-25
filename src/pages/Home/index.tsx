import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card/";
import { Container, ContainerChild } from "../../components/Container";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Input } from "../../components/Input";
import { useFetch } from "../../hooks/useFetch";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Movie } from "../../types/movies";
import { formatDate } from "../../utils/formatDate";

const labels = {
  addToCart: "Agregar al carrito",
  rent: "Rentar",
  buy: "Comprar",
  return: "<",
};
const storageName = "cart";
const initialSelectedItem = {
  id: "",
  action: "",
  date: formatDate(new Date()),
  quantity: 1,
};

const Home = () => {
  const dataFetchedRef = useRef(false);
  const { data, error, fetchData } = useFetch();
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);
  const [cart, setCart] = useLocalStorage(storageName, []);

  const handleAddToCart = (id: string) => {
    setSelectedItem({ ...initialSelectedItem, id });
  };

  const cancelOrder = (id: string) => {
    setSelectedItem(initialSelectedItem);
    const movie = data.find((item: Movie) => item.imdbID === id);
    if (movie) {
      const newCart = cart.filter((item: Movie) => item.imdbID !== id);
      setCart(newCart);
    }
  };

  const handlerRequest = (action: string) => {
    setSelectedItem({ ...selectedItem, action });
  };

  const updateCart = () => {
    const movie = data.find((item: Movie) => item.imdbID === selectedItem.id);
    if (movie) {
      const newItem = {
        ...movie,
        action: selectedItem.action,
        date: selectedItem.date,
        quantity: selectedItem.quantity,
      };
      const filteredCart = cart.filter((item: Movie) => item.imdbID !== newItem.imdbID);
      const newCart = [...filteredCart, newItem];
      setCart(newCart);
      setSelectedItem(initialSelectedItem);
    }
  };

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  };

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
