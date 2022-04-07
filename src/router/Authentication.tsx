import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import { jwtParse } from '../service/jwtParse';
import PATH from './pathConstants';

const Authentication: React.FC<any> = ({ children }) => {
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        // 判斷是否有登入
        checkLogin();
    });

    /**
     * checkLogin
     * 判斷是否有登入
     *
     */
    const checkLogin = () => {
        const token = localStorage.getItem('token');
        const isLogin = jwtParse(token); // 要作jtw金鑰檢查，是否為正確的token
        if (!isLogin) {
            sessionStorage.removeItem('token');
        } else if (
            isLogin &&
            (location.pathname === PATH.LOGIN || location.pathname === '/')
        ) {
            // to a specific page
        }
    };

    return children;
};

export default Authentication;
