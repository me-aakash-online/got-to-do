const {
    UPDATE_CURRENT_TODO,
    RESET_CURRENT_TODO,
} = require('../action-creators/todos');
const { default: initialState } = require('../initialState');

const CurrentTodoReducer = (state = initialState.currentTodo, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_TODO:
            return action.payload;
        case RESET_CURRENT_TODO:
            return null;
        default:
            return state;
    }
};

export default CurrentTodoReducer;
