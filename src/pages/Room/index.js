import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { fetchRoomInfo } from '../../actions/room-info-actions';
import RoomDetails from '../../components/room-details';

const propTypes = {
	room: PropTypes.object,
	fetchRoomInfo: PropTypes.func,
	match: PropTypes.object,
};

class Room extends Component {
	render() {
		return (
			<div>
				<RoomDetails room={this.props.room}/>
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
		booking: state.roomInfo.booking,
		room: state.roomInfo.room[0],
	};
}
function mapDispatchToProps(dispatch) {
	return {
		fetchRoomInfo: (id) => dispatch(fetchRoomInfo(id))
	};
}

Room.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Room);