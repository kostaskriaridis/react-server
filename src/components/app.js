import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import TodoList from './TodoList';

App.propTypes = {
    todos: PropTypes.array.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

export default function App({
    todos,
    onAddTodo,
    onToggleTodo,
    onDeleteTodo
}) {
    return (
        <Fragment>
            <Form
                buttonText='Add todo'
                onSubmit={onAddTodo} />
            <TodoList
                todos={todos}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo} />
        </Fragment>
    );
}
