import React from 'react';
import { Route } from 'react-router-dom';
import loadComponent from '../lib/loadable';

const Home = loadComponent({ loader: () => import('../../pages/Home') });
const Room = loadComponent({ loader: () => import('../../pages/Room') });

function RouteLayout() {
	return (
		<React.Fragment>
			<Route exact path="/" component={Home}></Route>
			<Route path="/room/:id" component={Room}></Route>
		</React.Fragment>
	);
}


export default RouteLayout;