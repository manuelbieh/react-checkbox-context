import React, { useCallback, useMemo, useState } from 'react';
import { Provider } from './context';
import { ProviderProps } from './types';

const CheckboxGroup = ({ children, values: passedValues = [], name, onChange }: ProviderProps) => {
    const [values, setValues] = useState(passedValues);

    React.useEffect(() => {
        setValues(passedValues);
    }, [passedValues]);

    const removeValue = useCallback(
        (originalEvent: React.ChangeEvent<HTMLInputElement>, value: string) => {
            const nextValues = values.includes(value)
                ? values.slice().filter((item) => item !== value)
                : values;

            setValues(nextValues);

            if (typeof onChange === 'function') {
                onChange(originalEvent, nextValues);
            }
        },
        [onChange, values]
    );

    const addValue = useCallback(
        (originalEvent: React.ChangeEvent<HTMLInputElement>, value: string) => {
            const nextValues =
                values.includes(value) === true ? values : values.slice().concat(value);

            setValues(nextValues);

            if (typeof onChange === 'function') {
                onChange(originalEvent, nextValues);
            }
        },
        [onChange, values]
    );

    const changeHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.persist();

            const {
                currentTarget: { value, checked },
            } = e;

            if (checked) {
                addValue(e, value);
            } else {
                removeValue(e, value);
            }
        },
        [addValue, removeValue]
    );

    const contextValue = useMemo(
        () => ({
            onChange: changeHandler,
            values,
            name,
        }),
        [changeHandler, name, values]
    );

    return <Provider value={contextValue}>{children}</Provider>;
};

export default CheckboxGroup;
