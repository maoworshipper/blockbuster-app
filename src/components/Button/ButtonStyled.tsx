import styled from "styled-components";
import { Button } from "./Button";

export const ButtonStyled = styled(Button)`
  background-color: #0d3da4;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0a2f7a;
  }
`;
