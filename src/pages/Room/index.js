import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { fetchRoomInfo } from '../../actions/room-info-actions';
import RoomDetails from '../../components/room-details';

class Room extends Component {

	render() {
		return (
			<div>
				<RoomDetails/>
			</div>
		);
	}
	componentDidMount() {
		const { id } = this.props.match.params;
		const { fetchRoomInfo } = this.props;

		fetchRoomInfo(id);
	}
}

function mapStateToProps(state) {
	return {
		room: state.roomInfo.data
	};
}
function mapDispatchToProps(dispatch) {
	return {
		fetchRoomInfo: (id) => dispatch(fetchRoomInfo(id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);