import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddedMovie } from "../../types/movies";
import { Box } from "../UI";
import { CartItem } from "./CartItem";
import { InfoBox } from "./InfoBox";
import { CartProps } from "./interfaces";
import { PriceBox } from "./PriceBox";

const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  height: 100%;
  margin: 8px auto 0;
  padding: 8px;
  font-size: 1rem;
  outline: none;
  border-bottom: 1px solid #ccc;

  h3:nth-child(1) {
    width: 10%;
    text-align: center;
  }

  h3:nth-child(2) {
    width: 60%;
  }

  h3:nth-child(3) {
    width: 10%;
    text-align: center;
  }

  h3:nth-child(4) {
    width: 20%;
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;

    h3:nth-child(1) {
      width: 20%;
    }

    h3:nth-child(2) {
      width: 40%;
    }

    h3:nth-child(3) {
      width: 10%;
    }

    h3:nth-child(4) {
      width: 30%;
    }
`;

const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-end;
  width: 30%;
  height: 100%;
  margin-right: 16px;
  padding: 8px;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    width: 60%;
    margin-right: 0;
  }
`;

const Separator = styled.hr`
  width: 96%;
  height: 1px;
  margin: 8px auto 0;
  padding: 0;
  border: none;
  background-color: #ccc;
`;

const Total = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 96%;
  height: 100%;
  margin: 8px auto 0;
  padding: 8px;
  font-size: 1rem;
  outline: none;

  @media screen and (max-width: 768px) {
    align-items: center;
    margin: 0 auto;
  }
`;

const CheckoutButton = styled(Link)`
  align-self: flex-end;
  width: 50%;
  text-decoration: none;
  text-align: center;
  background-image: linear-gradient(176deg, #3d9dea, #4a4eee);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-image: linear-gradient(176deg, #4a4eee, #3d9dea);
  }
`;

export const Cart = ({ cartItems, onEliminateItem }: CartProps) => {
  return (
    <>
      <h1>Cart</h1>
      <Box>
        <CartHeader>
          <h3>Poster</h3>
          <h3>Título/Categoría</h3>
          <h3>Cantidad</h3>
          <h3>Sub-Total</h3>
        </CartHeader>
        {cartItems.map((item: AddedMovie) => (
          <CartItem
            key={item.imdbID}
            {...item}
            onEliminateItem={onEliminateItem}
          />
        ))}
        <Separator />
        <CartFooter>
          <Total>
            <InfoBox>
              <h2>Total</h2>
              <h3>{cartItems.length} items</h3>
            </InfoBox>
            <PriceBox>
              <span>$ 0.00</span>
            </PriceBox>
          </Total>
          <CheckoutButton to="/checkout">Checkout</CheckoutButton>
        </CartFooter>
      </Box>
    </>
  );
};
