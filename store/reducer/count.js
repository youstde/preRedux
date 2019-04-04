export default function (state, action) {
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