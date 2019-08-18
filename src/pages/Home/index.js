import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/banner'

import './style.scss';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Banner/>
			</div>
		)
	}
}

export default Home
