import styled from "styled-components";
import { Button } from "../UI/Button";
import { ErrorMessageProps } from "./interfaces";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 60px;
  padding: 1rem;
  color: #ffffff;
  background-color: #f44336;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const ErrorMessage = ({
  message,
  showButton,
  buttonMessage,
  buttonAction,
}: ErrorMessageProps) => {
  return (
    <>
      <ErrorWrapper>
        <p>{message}</p>
        {showButton && (
            <Button onClick={buttonAction}>{buttonMessage}</Button>
        )}
      </ErrorWrapper>
    </>
  );
};
