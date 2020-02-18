import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    TODO_ADD,
    TODO_TOGGLE,
    TODO_DELETE
} from '../constants/action-types';
import App from '../components/App';

export default function AppContainer() {
    const {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
    } = useRedux();

    return (
        <App
            todos={todos}
            onAddTodo={addTodo}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo} />
    );
}

/**
 * Get state from stora and actions
 * @returns {Object}
 */
function useRedux() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const addTodo = useCallback(text => {
        dispatch({
            type: TODO_ADD,
            text
        });
    }, [dispatch]);

    const toggleTodo = useCallback(id => {
        dispatch({
            type: TODO_TOGGLE,
            id
        });
    }, [dispatch]);

    const deleteTodo = useCallback(id => {
        dispatch({
            type: TODO_DELETE,
            id
        });
    }, [dispatch]);

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
    };
}
