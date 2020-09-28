const { SET_BUCKET_LIST_OPEN } = require('../action-creators/list-open');
const { default: initialState } = require('../initialState');

const BucketListStatusReducer = (
    state = initialState.isBucketListOpen,
    action
) => {
    switch (action.type) {
        case SET_BUCKET_LIST_OPEN:
            return action.payload;
        default:
            return state;
    }
};

export default BucketListStatusReducer;
