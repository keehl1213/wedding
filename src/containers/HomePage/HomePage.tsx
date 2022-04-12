import React from 'react';
import mainbg from 'assets/photos/A100876-0034-1.jpg';
import mainbgSmall from 'assets/photos/A100876-0034-1-small.jpg';
import ProgressiveImage from 'react-progressive-image-loading';
import './HomePage.sass';

const HomePage: React.FC = () => (
    <div className="home-page">
        <ProgressiveImage
            preview={mainbgSmall}
            src={mainbg}
            render={(src, style) => (
                <img src={src} style={style} alt="wedding banner" />
            )}
        />
    </div>
);
export default HomePage;
