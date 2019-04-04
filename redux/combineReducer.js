export default function(reducers) {
    var reducersKey = Object.keys(reducers);
    return function(state = {}, action) {
        var nextState = {};
        for(var i= 0; i< reducersKey.length; i++) {
            var key = reducersKey[i];
            var reducer = reducers[key];
            var preState = state[key];
            var nextStateForKey = reducer(preState, action);
            nextState[key] = nextStateForKey;
        }
        return nextState;
    }
}