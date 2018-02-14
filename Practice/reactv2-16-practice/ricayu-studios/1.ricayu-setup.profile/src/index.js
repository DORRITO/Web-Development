import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const app = (<AppRouter />)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
