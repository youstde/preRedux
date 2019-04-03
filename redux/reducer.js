
export default function (state, action) {
    switch(action.type) {
        case 'ADD_COUNT': 
            return {
                ...state,
                count: state.count + 1
            }
            break;
        default: 
            return state;
            break;
    }
}