const {
    ADD_TODO,
    MODIFY_TODO,
    DELETE_TODO,
} = require('../action-creators/todos');
const { default: initialState } = require('../initialState');

const TodoReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    ...action.payload,
                    id: `${Date.now()}${state.length}`,
                },
            ];
        case MODIFY_TODO:
            const { id, ...rest } = action.payload;
            return state.map((item) => {
                if (item.id === id) {
                    return {
                        id,
                        ...rest,
                    };
                }
                return item;
            });
        case DELETE_TODO:
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
};

export default TodoReducer;
