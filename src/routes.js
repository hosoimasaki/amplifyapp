import React from 'react';

const Home = React.lazy(() => import('./screens/Home'));
const About = React.lazy(() => import('./screens/About'));
const Service = React.lazy(() => import('./screens/Service'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/service', exact: true, name: 'Service', component: Service },
]

export default routes;
