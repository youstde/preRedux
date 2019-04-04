/**
 * 
 * @param {Object} initState 
 */
export default function (reducer, initState) {
    let state = initState;
    const listeners = [];

    function subScribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener(state);
        });
    }

    dispatch({type: Symbol()});
    
    function getState() {
        return state;
    }

    return {
        subScribe,
        dispatch,
        getState
    }
}