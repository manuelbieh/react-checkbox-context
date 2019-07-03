// @flow
import React from 'react';
import CheckboxContext from './context';

type Props = {
    value: string;
};

const Checkbox = ({ value, ...props }: Props) => {
    const { name, values, onChange } = React.useContext(CheckboxContext);
    return (
        <input
            {...props}
            type="checkbox"
            name={name}
            value={value.toString()}
            checked={values.includes(value.toString())}
            onChange={onChange}
        />
    );
};

export default Checkbox;
