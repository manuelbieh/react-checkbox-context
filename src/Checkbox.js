// @flow
import React from 'react';
import { Consumer } from './context';

type CheckboxT = {
    value?: string,
};

export default class Checkbox extends React.Component<CheckboxT> {
    render() {
        const { value = 'on', ...rest } = this.props;
        return (
            <Consumer>
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
            </Consumer>
        );
    }
}
