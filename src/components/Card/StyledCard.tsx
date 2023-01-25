import styled from "styled-components";

const WrapperCard = styled.div`
  width: 320px;
  background-image: linear-gradient(176deg, #3d9dea, #4a4eee);
  border: none;
  border-radius: 2rem;
  overflow: hidden;
  padding: 0;
  font-size: 1rem;
  box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #cfd8dc;
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
  background-image: linear-gradient(120deg, #343a4f, #0f1620);
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

export { WrapperCard, CardInformation, DataLabel };
