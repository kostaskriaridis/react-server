import {
    TODO_ADD,
    TODO_TOGGLE,
    TODO_DELETE
} from '../constants/action-types';

let id = 0;

/**
 * Reducer for application
 *
 * @param {Array} [state=[]]
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function todos(state = [], action) {
    switch (action.type) {
        case TODO_ADD: {
            return state.concat({
                id: ++id,
                text: action.text,
                completed: false
            });
        }

        case TODO_TOGGLE: {
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        }

        case TODO_DELETE: {
            return state.filter(todo => todo.id !== action.id);
        }

        default: {
            return state;
        }
    }
}
