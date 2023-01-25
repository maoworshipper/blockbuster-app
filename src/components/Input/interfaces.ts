export interface InputProps {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    value?: string | number;
    size?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}