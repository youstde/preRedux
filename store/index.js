import { createStore } from '../redux';
import { countReducer, infoReducer } from './reducer/index';
import combineReducer from '../redux/combineReducer';

const reducer = combineReducer({
    count: countReducer,
    info: infoReducer
})

const store = createStore(reducer);

const next = store.dispatch;

const logerMiddleWare = (next) => (action) => {
    console.log('logger:', 'logger');
    next(action);
}

const timerMiddleWare = (next) => (action) => {
    console.log('timer:', 'timer');
    next(action);
}

const exception = (next) => (action) => {
    try {
        next(action);
    } catch(err) {
        console.log(err);
    }
}

store.dispatch = exception(logerMiddleWare(timerMiddleWare(next)));


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