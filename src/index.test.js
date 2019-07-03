import React from 'react';
import renderer from 'react-test-renderer';
import { CheckboxGroup, Checkbox } from '.';

describe('CheckboxGroup', () => {
    it('correctly sets "checked" attribute', () => {
        expect(
            renderer
                .create(
                    <CheckboxGroup name="test" initialValues={['1', '2']}>
                        <Checkbox value="1" />
                        <Checkbox value="3" />
                    </CheckboxGroup>
                )
                .toJSON()
        ).toMatchSnapshot();
    });

    it('renders correctly when deeply nested', () => {
        expect(
            renderer
                .create(
                    <CheckboxGroup name="test" initialValues={['1', '2']}>
                        <div>
                            <div>
                                <Checkbox value="1" />
                                <Checkbox value="3" />
                            </div>
                        </div>
                    </CheckboxGroup>
                )
                .toJSON()
        ).toMatchSnapshot();
    });
});
