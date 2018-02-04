import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/store/store';

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

  store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT' })


ReactDOM.render(<AppRouter />, document.getElementById('app'));
registerServiceWorker();
