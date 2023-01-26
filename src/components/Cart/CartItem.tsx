import styled from "styled-components";
import { ItemCartMovie } from "../../types/movies";
import { Button } from "../UI/Button";
import { InfoBox } from "./InfoBox";
import { PriceBox } from "./PriceBox";

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  row-gap: 8px;
  column-gap: 8px;
  width: 96%;
  height: 100%;
  margin: 8px auto 0;
  padding: 8px;
  font-size: 1rem;
  outline: none;
`;

const ImageBox = styled.div`
  width: 10%;
  text-align: center;

  img {
    width: auto;
    height: 100px;
  }

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;

const QuantityBox = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: #202020;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 1rem;
    }
  }
`;

const RemoveButton = styled(Button)`
  background-image: none;
  background-color: transparent;
  padding: 0;
  font-size: 0.75rem;
  color: #f44336;
  text-decoration: underline;

  &:hover {
    background-image: none;
    background-color: transparent;
    color: #e57373;
  }
`;

export const CartItem = ({
  Title,
  imdbID,
  Poster,
  action,
  quantity,
  onEliminateItem,
}: ItemCartMovie) => {
  return (
    <>
      <StyledCartItem>
        <ImageBox>
          <img src={Poster} alt={Title} />
        </ImageBox>
        <InfoBox>
          <h2>{Title}</h2>
          <h3>{action}</h3>
        </InfoBox>
        <QuantityBox>
          <span>{quantity}</span>
        </QuantityBox>
        <PriceBox>
          <span>Free</span>
          <RemoveButton onClick={() => onEliminateItem(imdbID)}>Eliminar</RemoveButton>
        </PriceBox>
      </StyledCartItem>
    </>
  );
};
