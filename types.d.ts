/// <reference types="react" />
export declare type ContextValue = {
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: string[];
};
export declare type ProviderProps = {
    children: React.ReactNode;
    values?: string[];
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, values: string[]) => void;
};
