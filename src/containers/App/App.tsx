import React from 'react';
import { FullpageRoutes } from 'router';
import Header from 'components/Header/Header';

const App: React.FC<any> = () => (
    <div className="main">
        <Header />
        <FullpageRoutes />
    </div>
);
export default App;
