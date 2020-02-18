import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

export default function TodoList({
    todos,
    onToggleTodo,
    onDeleteTodo
}) {
    if (!todos.length) {
        return (
            <div>No todos found</div>
        );
    }

    return todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo} />
    ));
}
