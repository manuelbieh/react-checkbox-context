// @flow
import React from 'react';
import CheckboxContext from './context';

type CheckboxT = {
    value: string | number,
};

export default class Checkbox extends React.Component<CheckboxT> {
    render() {
        const { value, ...rest } = this.props;
        return (
            <CheckboxContext.Consumer>
                {({ name, values, onChange }) => (
                    <input
                        {...rest}
                        type="checkbox"
                        name={name}
                        value={value.toString()}
                        checked={values.includes(value.toString())}
                        onChange={onChange}
                    />
                )}
            </CheckboxContext.Consumer>
        );
    }
}
