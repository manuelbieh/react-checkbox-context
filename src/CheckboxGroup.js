// @flow
import React from 'react';
import { Provider } from './context';

type CheckboxGroupPropsT = {
    children: any,
    name?: string,
    onChange: (e: SyntheticInputEvent<HTMLInputElement>, values: string[]) => any,
    values?: string[],
};

export default class CheckboxGroup extends React.Component<CheckboxGroupPropsT> {
    static defaultProps = {
        name: undefined,
        values: [],
        onChange: () => {},
    };

    onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
        e.persist();
        const {
            currentTarget: { value, checked },
        } = e;
        const { onChange } = this.props;

        let newValues;
        if (checked) {
            newValues = this.addValue(value);
        } else {
            newValues = this.removeValue(value);
        }

        onChange(e, newValues);
    };

    removeValue = (value: string) => {
        const { values } = this.props;
        return values.filter((item) => item !== value);
    };

    addValue = (value: string) => {
        const { values } = this.props;
        return values.concat(value);
    };

    render() {
        const { children, name, values } = this.props;

        const contextValue = {
            onChange: this.onChange,
            values,
            name,
        };

        return <Provider value={contextValue}>{children}</Provider>;
    }
}
