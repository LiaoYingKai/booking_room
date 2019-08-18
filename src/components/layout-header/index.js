import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './style.scss'

function LayoutHeader(){
	return (
		<div className="header">
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
				</li>
				<li>
					<NavLink to="/About" activeClassName="activeLink">About</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default LayoutHeader;