import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PortfolioDashboardPage from '../components/PortfolioDashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import EditPortfolioPage from '../components/EditPortfolioPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={PortfolioDashboardPage} />
        <Route path="/portfolio" exact={true} component={PortfolioPage} />
        <Route path="/portfolio/:id" component={EditPortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
