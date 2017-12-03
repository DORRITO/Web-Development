import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>Check out what I've done</h1>
    <Link to="/portfolio/1">item1</Link>
    <Link to="/portfolio/2">item2</Link>
  </div>
);

export default PortfolioPage;