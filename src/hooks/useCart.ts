import { useState } from "react";
import { Movie } from "../types/movies";
import { formatDate } from "../utils/formatDate";
import { useLocalStorage } from "./useLocalStorage";

export const useCart = (data: Movie[]) => {
  const initialSelectedItem = {
    id: "",
    action: "",
    date: formatDate(new Date()),
    quantity: 1,
  };
  const storageName = "cart";
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
      const filteredCart = cart.filter(
        (item: Movie) => item.imdbID !== newItem.imdbID
      );
      const newCart = [...filteredCart, newItem];
      setCart(newCart);
      setSelectedItem(initialSelectedItem);
    }
  };

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  };

  return {
    selectedItem,
    handleAddToCart,
    cancelOrder,
    handlerRequest,
    updateCart,
    handlerInputChange,
  };
};
