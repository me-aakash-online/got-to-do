import { CHANGE_SELECTION } from '../action-creators/selection';
import initialState from '../initialState';

const CurrentSelectionReducer = (
    state = initialState.currentSelection,
    action
) => {
    switch (action.type) {
        case CHANGE_SELECTION:
            return action.payload;
        default:
            return state;
    }
};

export default CurrentSelectionReducer;
