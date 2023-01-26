import styled from "styled-components";
import { InputProps } from "./interfaces";

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 8px;
  column-gap: 8px;
  width: auto;
  height: 100%;
  margin: 8px auto 0;
`;

const StyledInput = styled.input`
  height: 36px;
  padding: 0 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  width: ${(props) => (props.width === "small" ? "40px" : "auto")};

  &:focus {
    border: 1px solid #000;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
`;

export const Input = ({
  type,
  name,
  label,
  placeholder,
  value,
  size,
  onChange,
}: InputProps) => {
  return (
    <WrapperInput>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        width={size}
        onChange={onChange}
      />
    </WrapperInput>
  );
};
