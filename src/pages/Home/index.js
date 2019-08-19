import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/banner'
import RoomList from '../../components/room-list'


import './style.scss';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Banner/>
				<RoomList/>
			</div>
		)
	}
}

export default Home
