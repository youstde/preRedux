import { createStore } from './redux';
import reducer from './redux/reducer';

const initState = {
    a: 1,
    b: 2,
    count: 2
}

const store = createStore(reducer, initState);

store.subScribe(() => {
    console.log('I get you:', store.getState());
});

store.dispatch({
    type: 'ADD_COUNT'
});