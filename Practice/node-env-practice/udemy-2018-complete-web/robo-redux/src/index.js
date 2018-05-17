import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';

import 'tachyons';


const store = createStore(searchRobots);
const provider = <Provider store={store}>
                    <App />
                 </Provider>

ReactDOM.render(provider, document.getElementById('root'));
registerServiceWorker();
