import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { fetchRoomInfo } from '../../actions/room-info-actions';
import RoomDetails from '../../components/room-details';
import RoomInfoBanner from '../../components/room-info-banner';
import BookingCalendar from '../../components/booking-calendar';
import Modal from '../../components/modal';
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
		const { amenities = {}, imageUrl = [], holidayPrice, normalDayPrice, name, description, checkInAndOut = {}, descriptionShort = {} } =  room;
		const { checkInEarly, checkInLate, checkOut } = checkInAndOut;
		const { Footage, GuestMax, GuestMin, Bed = [] } = descriptionShort;

		return (
			<div className="room">
				<RoomInfoBanner imageUrl={imageUrl}/>
				<div className="room-content">
					<div className="room-content__info">
						<div className="room-content__info-details">
							<p className="room-content__info-details-title">{name}</p>
							<p>房客人數限制： {GuestMin}~{GuestMax} 人</p>
							<p>床型：{Bed[0]}</p>
							<p>衛浴數量： {descriptionShort['Private-Bath']} 間</p>
							<p>房間大小： {Footage} 平方公尺</p>
							<p className="room-content__info-details-description">{description}</p>
							<p>\\\</p>
							<div className="room-content__info-details-time">
								<p>Check In <br/> <span>{`${checkInEarly} - ${checkInLate}` }</span> </p>
								<p>Check Out <br/> <span>{checkOut}</span> </p>
							</div>
							<RoomDetails amenities={amenities} style={{ marginTop: 40 }}/>
						</div>
						<div className="room-content__info-price">
							<p>NT.{normalDayPrice} </p>
							<p>平日(一~四)</p>
							<p>NT.{holidayPrice}</p>
							<p>假日(五~日)</p>
						</div>
					</div>
					<div className="room-content__calendar">
						<BookingCalendar/>
					</div>
				</div>
				<Modal></Modal>
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