import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default function Form({ buttonText, onSubmit }) {
    const [value, setValue] = useState('');

    const handleChangeInput = useCallback(event => {
        setValue(event.target.value);
    }, []);

    const handleSubmit = useCallback(event => {
        event.preventDefault();

        onSubmit(value.trim());

        setValue('');
    }, [value]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={value}
                onChange={handleChangeInput} />
            <button
                type='submit'
                disabled={!value.trim()}>
                {buttonText}
            </button>
        </form>
    );
}
