import React from 'react';
import { ContextValue } from './types';

const Context = React.createContext<ContextValue>({
    name: '',
    values: [],
});

export const Consumer = Context.Consumer;
export const Provider = Context.Provider;

export default Context;
