import styled from "styled-components";
import { AddedMovie } from "../../types/movies";
import { Button } from "../Button";
import { CartItem } from "./CartItem";
import { InfoBox } from "./InfoBox";
import { PriceBox } from "./PriceBox";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 8px;
  column-gap: 8px;
  width: 100%;
  height: 100%;
  margin: 8px auto 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

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
`;

const CheckoutButton = styled(Button)`
  align-self: flex-end;
  width: 50%;
`;

export const Cart = (cart : AddedMovie[]) => {
  return (
    <>
      <h1>Cart</h1>
      <StyledCart>
        <CartHeader>
          <h3>Poster</h3>
          <h3>Título/Categoría</h3>
          <h3>Cantidad</h3>
          <h3>{cart.length} items</h3>
        </CartHeader>
        {cart.map((item: AddedMovie) => (
          <CartItem key={item.imdbID} {...item} />
        ))}
        <Separator />
        <CartFooter>
          <Total>
            <InfoBox>
              <h2>Sub-Total</h2>
              <h3>{cart.length} items</h3>
            </InfoBox>
            <PriceBox>
              <span>$ 0.00</span>
            </PriceBox>
          </Total>
          <CheckoutButton>Checkout</CheckoutButton>
        </CartFooter>
      </StyledCart>
    </>
  );
};
