import { ButtonProps } from "./interfaces";

export const Button = ({text, action} : ButtonProps) => {
    return (
        <>
            <button onClick={() => action()}>{text}</button>
        </>
    );
};