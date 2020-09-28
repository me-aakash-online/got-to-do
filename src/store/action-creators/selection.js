export const CHANGE_SELECTION = 'CHANGE_SELECTION';

export const changeSelection = (category) => ({
    type: CHANGE_SELECTION,
    payload: category,
});
