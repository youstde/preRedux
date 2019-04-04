
function countReducer (state, action) {
    switch(action.type) {
        case 'ADD_COUNT': 
            return {
                ...state,
                a: state.a + 1
            }
        default: 
            return state;
    }
}

function infoReducer (state, action) {
    switch(action.type) {
        case 'UPDATE_NAME': 
            return {
                ...state,
                name: action.name
            }
        default: 
            return state;
    }
}

export {
    countReducer,
    infoReducer
}