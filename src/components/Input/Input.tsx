import { InputProps } from "./interfaces";

export const Input = ({ type, name, placeholder, value }: InputProps) => {
  return (
    <>
      <input type={type} name={name} placeholder={placeholder} value={value} />
    </>
  );
};
