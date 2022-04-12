import React from 'react';
import { FullpageRoutes } from 'router';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const App: React.FC<any> = () => (
    <div className="main">
        <Header />
        <FullpageRoutes />
        <Footer />
    </div>
);
export default App;
