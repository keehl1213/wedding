import React, { lazy, Suspense } from 'react';
import { Routes, Route, RouteProps } from 'react-router-dom';
import PATH, { FULLPAGE_PREFIX } from './pathConstants';
import Authentication from './Authentication';

export const WaitingComponent = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<div>Module loading....</div>}>
            <Component {...props} />
        </Suspense>
    );

const EmptyPage: React.FC = () => (
    <>Opps... Something went wrong. Please check your url path again.</>
);

/*
  Layout
*/
const App = WaitingComponent(lazy(() => import('containers/App/App')));

const routes = () => (
    <Authentication>
        <Routes>
            <Route path={`${FULLPAGE_PREFIX}*`} element={<App />} />
            <Route element={EmptyPage} />
        </Routes>
    </Authentication>
);

/*
  FULLPAGE Routes
*/
const HomePage = WaitingComponent(
    lazy(() => import('containers/HomePage/HomePage'))
);
const Photos = WaitingComponent(lazy(() => import('containers/Photos/Photos')));
const OurStory = WaitingComponent(
    lazy(() => import('containers/OurStory/OurStory'))
);
const AboutUs = WaitingComponent(
    lazy(() => import('containers/AboutUs/AboutUs'))
);

const fullpageRoutes: RouteProps[] = [
    { path: PATH.HOME, element: <HomePage /> },
    { path: PATH.PHOTOS, element: <Photos /> },
    { path: PATH.OUR_STORY, element: <OurStory /> },
    { path: PATH.ABOUT_US, element: <AboutUs /> },
    { element: <EmptyPage /> },
];

export const FullpageRoutes = () => (
    <Routes>
        {fullpageRoutes.map((config) => (
            <Route key={`route_${config.path}`} {...config} />
        ))}
    </Routes>
);

export default routes;
