export const getState = () => {
    try {
        const state = sessionStorage.getItem('state');
        if (state === null) {
            return undefined;
        }
        return JSON.parse(state);
    } catch (err) {
        return undefined;
    }
};

export const setState = (item) => {
    try {
        const serializedState = JSON.stringify(item);
        sessionStorage.setItem('state', serializedState);
    } catch (err) {
        // do something imp
    }
};
