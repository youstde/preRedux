import { createStore } from '../redux';
import { countReducer, infoReducer } from './reducer/index';
import combineReducer from '../redux/combineReducer';

const reducer = combineReducer({
    count: countReducer,
    info: infoReducer
})

const store = createStore(reducer);

store.subScribe(() => {
    console.log('I get you:', store.getState());
});

store.dispatch({
    type: 'ADD_COUNT'
});

store.dispatch({
    type: 'UPDATE_NAME',
    name: 'songtao'
})