import React from 'react'
import { Route } from 'react-router-dom'
import loadComponent from '../lib/loadable'

const Home = loadComponent({ loader: () => import('../../pages/Home') })
const About = loadComponent({ loader: () => import('../../pages/About') })

function RouteLayout(){
	return (
		<React.Fragment>
			<Route exact path="/" component={Home}></Route>
			<Route path="/about" component={About}></Route>
		</React.Fragment>
	)
}


export default RouteLayout;