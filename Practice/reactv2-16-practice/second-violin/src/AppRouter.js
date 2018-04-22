import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from '../components/App';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={App} exact={true} />
        </Switch>
    </Router>
);

export default AppRouter;