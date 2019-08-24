import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { fetchRoomInfo } from '../../actions/room-info-actions';
import RoomDetails from '../../components/room-details';
import RoomInfoBanner from '../../components/room-info-banner';
import './style.scss';
const propTypes = {
	room: PropTypes.object,
	fetchRoomInfo: PropTypes.func,
	match: PropTypes.object,
};

const defaultProps = {
	room: {},
};

class Room extends Component {
	render() {
		const { room } = this.props;
		const { amenities = {}, imageUrl = [], holidayPrice, normalDayPrice } =  room;

		return (
			<div className="room">
				<RoomInfoBanner imageUrl={imageUrl}/>
				<div className="room-content">
					<div className="room-content__info">
						<div className="room-content__info-details">
							<RoomDetails amenities={amenities}/>
						</div>
						<div className="room-content__info-price">
							<p>NT.{normalDayPrice} </p>
							<p>平日(一~四)</p>
							<p>NT.{holidayPrice}</p>
							<p>假日(五~日)</p>
						</div>
					</div>
					<div className="room-content__calendar"></div>


				</div>
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
Room.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Room);