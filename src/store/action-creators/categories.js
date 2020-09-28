export const ADD_CATEGORY = 'ADD_CATEGORY';

export const addCategory = (categoryName) => ({
    type: ADD_CATEGORY,
    payload: categoryName,
});
