import initialState from '../initialState';
import { ADD_CATEGORY } from '../action-creators/categories';

const CategoryReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return [...new Set([...state, action.payload])];
        default:
            return state;
    }
};

export default CategoryReducer;
