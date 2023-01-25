import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartButton = styled(Link)`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(176deg, #3d9dea, #4a4eee);
  color: #ffffff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-image: linear-gradient(176deg, #4a4eee, #3d9dea);
    color: #ffffff;
  }
`;
