import React, { Component, } from 'react';
import Banner from '../../components/home-banner';
import RoomList from '../../components/home-room-list';
import './style.scss';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Banner/>
				<RoomList/>
			</div>
		);
	}
}

export default Home;
