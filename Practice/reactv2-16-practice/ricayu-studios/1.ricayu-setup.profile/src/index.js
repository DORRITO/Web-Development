import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const app = (
    <div>
        <App />
        <AppRouter />
    </div>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
