import { ButtonStyled } from "../Button";
import { CardProps } from "./interfaces";

export const Card = ({ id, title, year, type, poster }: CardProps) => {
  const handleAddToCart = () => {
    
  };
  return (
    <>
      <div>
        <img src={poster} alt={title} />
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{type}</p>
        <ButtonStyled text="Agregar al carrito" action={handleAddToCart}/>
      </div>
    </>
  );
};
