import styled from "styled-components";

export const Button = styled.button`
  background-image: linear-gradient(176deg, #3D9DEA, #4A4EEE);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-image: linear-gradient(176deg, #4A4EEE, #3D9DEA);
  }
`;
