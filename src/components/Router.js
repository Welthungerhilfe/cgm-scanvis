import {BrowserRouter, Route} from 'react-router-dom'
import App from '../App'
import Visualize from './Visualize'

import React from 'react';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={App}></Route>
            <Route path='/visualize' component={Visualize}></Route>
        </BrowserRouter>
    );
};

export default Router;