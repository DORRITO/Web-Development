import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';


import { createStore } from 'redux'

//actions
const incrementCount = (incrementBy = {}) => ({
    type: 'INCREMENT',
    incrementBy : incrementBy.incrementBy
});

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {count: state.count + action.incrementBy}
        case 'DECREMENT':
        return state - 1
        default:
        return state
    }
});
// let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(incrementCount({ incrementBy: 1 }))

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
registerServiceWorker();
