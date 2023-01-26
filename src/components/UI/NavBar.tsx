import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: #ccc;
  }
`;
