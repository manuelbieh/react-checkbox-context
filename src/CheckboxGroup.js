// @flow
import React from 'react';
import { Provider } from './context';

type CheckboxGroupPropsT = {
    children: any,
    name?: string,
    onChange: (e: SyntheticInputEvent<HTMLInputElement>, values: string[]) => any,
    values?: string[],
};

type CheckboxGroupStateT = {
    values: string[],
};

export default class CheckboxGroup extends React.Component<
    CheckboxGroupPropsT,
    CheckboxGroupStateT
> {
    state = {
        values: Array.isArray(this.props.values) ? this.props.values : [],
    };

    onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
        e.persist();
        const {
            currentTarget: { value, checked },
        } = e;

        if (checked) {
            this.addValue(e, value);
        } else {
            this.removeValue(e, value);
        }
    };

    customOnChangeHandler = (
        originalEvent: SyntheticInputEvent<HTMLInputElement>,
        values: string[]
    ) => {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(originalEvent, values);
        }
    };

    removeValue = (originalEvent: SyntheticInputEvent<HTMLInputElement>, value: string) => {
        this.setState(
            ({ values }) => ({
                values: values.includes(value)
                    ? values.slice().filter((item) => item !== value)
                    : values,
            }),
            () => {
                this.customOnChangeHandler(originalEvent, this.state.values);
            }
        );
    };

    addValue = (originalEvent: SyntheticInputEvent<HTMLInputElement>, value: string) => {
        this.setState(
            ({ values }) => ({
                values: values.indexOf(value) === -1 ? values.slice().concat(value) : values,
            }),
            () => {
                this.customOnChangeHandler(originalEvent, this.state.values);
            }
        );
    };

    render() {
        const { children, name } = this.props;

        const contextValue = {
            onChange: this.onChange,
            values: this.state.values,
            name,
        };

        return <Provider value={contextValue}>{children}</Provider>;
    }
}
