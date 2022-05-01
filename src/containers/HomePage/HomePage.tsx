import React from 'react';
import mainbg from 'assets/photos/A100876-0034-1.jpg';
import mainbgSmall from 'assets/photos/A100876-0034-1-small.jpg';
import ProgressiveImage from 'react-progressive-image-loading';
import ReactGA from 'react-ga4';
import PATH from 'router/pathConstants';
import './HomePage.sass';

const HomePage: React.FC = () => {
    ReactGA.send(PATH.HOME);
    return (
        <div className="home-page">
            <ProgressiveImage
                preview={mainbgSmall}
                src={mainbg}
                render={(src, style) => (
                    <img src={src} style={style} alt="wedding banner" />
                )}
            />
            <pre>
                {`詞/曲：張哲瑜

還以為人生 會一直徬徨
妳出現時候 我都還沒想
一不小心 當妳的太陽
彼此扶持著成長
說我幹話多 可妳也一樣
上山下海 前往每個地方 
期待著妳 的微笑模樣
紀錄 我們的時光

細數不完的迴響 有多少的分享
夜夜的笑場 一盞燈光照亮
無論妳有多沮喪 我都會在身旁
我想對妳說 妳真的不一樣

雖然我常常讓妳很厭煩
又或者就是妳的大麻煩
不管接下來經歷多難 
一起度過每次難關

我懂妳的習慣 我也習慣
經歷這些年 互相的陪伴
規劃每一次每個期盼
每個將來
最後還要說一聲 張太太


詞曲 Lyrics & Composer｜張哲瑜
編曲｜顏誌寬
人聲錄音室｜蒂兒音樂
和聲演唱｜張哲瑜
和聲編曲｜張哲瑜
混音工程師Mixing Engineer｜勝鴻
母帶後期處理錄音室 Mastering Studio｜蒂兒音樂`}
            </pre>
            <div className="map-wrapper">
                <iframe
                    title="memory"
                    src="https://www.google.com/maps/d/embed?mid=195y3R6S2crqow3QRY1m-BAHAwl507ZJO&ehbc=2E312F"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    style={{ border: 0, marginTop: '-150px' }}
                />
            </div>
        </div>
    );
};
export default HomePage;
