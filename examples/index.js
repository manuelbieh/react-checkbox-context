import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, CheckboxGroup } from '../src';

const Examples = () => {
    const [checkedValues, setCheckedValues] = useState(['2', '3']);
    const check1and3 = () => {
        setCheckedValues(['1', '3']);
    };

    const checkAll = () => {
        setCheckedValues(['1', '2', '3']);
    };

    const uncheckAll = () => {
        setCheckedValues([]);
    };

    return (
        <div>
            <p>
                <button onClick={check1and3}>Check 1 + 3</button>
                <button onClick={checkAll}>Check All</button>
                <button onClick={uncheckAll}>Uncheck All</button>
            </p>
            <CheckboxGroup
                name="xy"
                values={checkedValues}
                onChange={(e, values) => {
                    setCheckedValues(values);
                }}
            >
                <label>
                    <Checkbox value="1" /> 1
                </label>
                <label>
                    <Checkbox value="2" /> 2
                </label>
                <label>
                    <Checkbox value="3" /> 3
                </label>
            </CheckboxGroup>
            <pre>Checked values: {JSON.stringify(checkedValues, null, 2)}</pre>
        </div>
    );
};

ReactDOM.render(<Examples />, document.getElementById('example'));
