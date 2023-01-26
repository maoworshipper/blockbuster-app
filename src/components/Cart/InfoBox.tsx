import styled from "styled-components";

export const InfoBox = styled.div`
  height: 100%;
  width: 60%;

  h2 {
    margin: 0;
    padding-top: 10px;
    line-height: 10px;
    font-size: 1.25rem;
    font-family: "Open Sans";
    font-weight: 800;
    color: #202020;
  }

  h3 {
    margin: 0.75rem 0;
    line-height: 10px;
    font-size: 18px;
    font-family: "Open Sans";
    font-weight: 600;
    color: #909090;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1rem;
      line-height: 25px;
    }

    h3 {
      font-size: 1rem;
      margin: 0.5rem 0;
    }
`;