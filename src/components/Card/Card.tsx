import styled from "styled-components";
import { Button } from "../Button";
import { CardProps } from "./interfaces";

const label = "Agregar al carrito";

const WrapperCard = styled.div`
    width: 320px;
    background-image: linear-gradient(176deg, #3D9DEA, #4A4EEE);
    border: none;
    border-radius: 2rem;
    overflow: hidden;
    padding: 0;
    font-size: 1rem;
    box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.75);
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #CFD8DC;
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 420px;
    }
    `;

const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image:  linear-gradient(120deg,  #343A4F, #0F1620);
    color: #ffffff;
    padding: 1rem 1.5rem 1.5rem;
    min-height: 180px;

    & > h3 {
        font-size: 1.5rem;
        margin: 0;
    }

    & > p {
        font-size: 1rem;
        margin: 0;
    }
    `;    

const DataLabel = styled.p`
    font-size: 1rem;
    margin: 0;

    & > span {
        font-weight: 500;
    }
    `;    

export const Card = ({ id, title, year, type, poster }: CardProps) => {
  const handleAddToCart = () => {
    
  };
  return (
    <>
      <WrapperCard>
        <img src={poster} alt={title} />
        <CardInformation>
        <h3>{title}</h3>
        <DataLabel><span>Año de lanzamiento:</span> {year}</DataLabel>
        <DataLabel><span>Categoría:</span> {type}</DataLabel>
        <Button onClick={handleAddToCart}>{label}</Button>
        </CardInformation>
      </WrapperCard>
    </>
  );
};
