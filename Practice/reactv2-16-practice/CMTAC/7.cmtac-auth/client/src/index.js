import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';


import { createStore } from 'redux'

//actions
const getName = ({name} = {}) => ({
    type: 'GETNAME',
    name
});

const store = createStore((state = {user: ''}, action) => {
    switch (action.type) {
        case 'GETNAME':
            return {user: action.name}
        default: return state
    }
});
// let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(getName({ name: 'Rychar' }))

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
registerServiceWorker();
