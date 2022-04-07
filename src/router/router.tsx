import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routerConfig';

const Router: React.FC = () => {
    const component = (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
    return component;
};

export default Router;
