import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';

import 'tachyons';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));
const provider = <Provider store={store}>
                    <App />
                 </Provider>

ReactDOM.render(provider, document.getElementById('root'));
registerServiceWorker();
