import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import Visualize from './Visualize';

import React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App}></Route>
      <Route path="/visualizer" component={Visualize}></Route>
    </BrowserRouter>
  );
};

export default Router;
