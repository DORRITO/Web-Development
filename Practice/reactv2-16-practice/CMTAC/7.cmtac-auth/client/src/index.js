import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter, {history} from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
registerServiceWorker();
