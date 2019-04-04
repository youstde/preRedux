const initState = {
    name: 'tt',
    age: 26
}

export default function (state = initState, action) {
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
