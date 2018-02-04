import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'

function counter(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
    }
  }

  let store = createStore(counter)

  store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT' })


ReactDOM.render(<AppRouter />, document.getElementById('app'));
registerServiceWorker();
