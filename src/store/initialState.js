import LABELS from '../globals/constants';

const todos = [];

const categories = [LABELS.SIDEBAR.DEFAULTBUCKET];

const currentSelection = categories[0];

const currentTodo = null;

const isBucketListOpen = false;

const initialState = {
    todos,
    categories,
    currentSelection,
    currentTodo,
    isBucketListOpen,
};

export default initialState;
