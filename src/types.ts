export type ContextValue = {
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: string[];
};

export type ProviderProps = {
    children: React.ReactNode;
    values?: string[];
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, values: string[]) => void;
};
