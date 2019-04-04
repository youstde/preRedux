
const initState = {
    a: 1,
    b: 2
};

export default function (state = initState, action) {
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