export const ADD_TODO = 'ADD_TODO';
export const MODIFY_TODO = 'MODIFY_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_CURRENT_TODO = 'UPDATE_CURRENT_TODO';
export const RESET_CURRENT_TODO = 'RESET_CURRENT_TODO';

export const addTodo = ({ name, status, categoryId }) => ({
    type: ADD_TODO,
    payload: {
        name,
        status,
        categoryId,
    },
});

export const modifyTodo = ({ id, name, status, categoryId }) => ({
    type: MODIFY_TODO,
    payload: {
        id,
        name,
        status,
        categoryId,
    },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const updateCurrentTodo = (id) => ({
    type: UPDATE_CURRENT_TODO,
    payload: id,
});

export const resetCurrentTodo = () => ({
    type: RESET_CURRENT_TODO,
});
