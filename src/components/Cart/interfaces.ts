import { AddedMovie } from "../../types/movies";

export interface CartProps {
    cartItems: AddedMovie[];
    onEliminateItem: (id: string) => void;
  }