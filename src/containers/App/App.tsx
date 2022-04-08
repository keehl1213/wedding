import React, { useEffect, useContext } from 'react';
// import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
// import { getUserInfoApi } from 'api/tenantAccountApi';
// import { logoutApi } from 'api/loginApi';
// import { LoadingBar, IftttHeader } from 'component';
// import { GlobalContext } from 'store/appStore';
// import { startTimer, stopTimer } from 'utils/tokenHelper';
// import { apiCaller } from 'service/apiCaller';
import { FullpageRoutes } from 'router';

// const Main = styled.div`
//     position: relative;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     width: 100vw;
//     height: calc(100vh - 80px);
//     overflow: hidden;
// `;

const App: React.FC<any> = () => (
    <>
        {/* <LoadingBar /> */}
        {/* <IftttHeader /> */}
        <div className="main">
            <FullpageRoutes />
        </div>
    </>
);
export default App;
