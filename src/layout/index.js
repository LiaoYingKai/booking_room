import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, } from 'react-router-dom';
import RouteLayout from './route';
import { connect } from 'react-redux';
import { fetchRooms } from '../actions/rooms-actions';
import './style.scss';

const propTypes = {
	fetchRooms: PropTypes.func.isRequired,
};

class Layout extends Component {
	render() {
		return (
			<Router>
				<div className="home-page__content">
					<RouteLayout/>
				</div>
			</Router>
		);
	}
	componentDidMount() {
		this.props.fetchRooms();
	}
}

Layout.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
	return  {
		fetchRooms: () => dispatch(fetchRooms())
	};
}

export default connect(null, mapDispatchToProps)(Layout);