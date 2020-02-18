import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

export default function Todo({
    id,
    text,
    completed,
    onToggleTodo,
    onDeleteTodo
}) {
    const handleToggleTodo = useCallback(() => {
        onToggleTodo(id);
    }, [id, onToggleTodo]);

    const handleDeleteTodo = useCallback(() => {
        onDeleteTodo(id);
    }, [id, onDeleteTodo]);

    return (
        <div>
            <span
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
                onClick={handleToggleTodo}
            >
                {text}
            </span>
            <button onClick={handleDeleteTodo}>
                Delete
            </button>
        </div>
    );
}
