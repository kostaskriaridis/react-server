import React, { useState, useCallback } from 'react';

export default function App() {
    const [counter, setCounter] = useState(0);

    const handleDecrement = useCallback(() => {
        setCounter(prevCounter => prevCounter - 1);
    }, []);

    const handleIncrement = useCallback(() => {
        setCounter(prevCounter => prevCounter + 1);
    }, []);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleDecrement}>
                -
            </button>
            <button onClick={handleIncrement}>
                +
            </button>
        </div>
    );
}
