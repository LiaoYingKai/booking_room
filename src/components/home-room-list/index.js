import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const propTypes = {
	rooms: PropTypes.array,
	fetchRooms: PropTypes.func,
};

const defatulProps = {
	rooms: [],
};

class RoomList extends Component {
	render() {
		const { rooms } = this.props;

		return (
			<div className="room-list">
				{
					rooms.map(item => (
						<Link className="room-list__info" key={item.id} to={`room/${item.id}`}>
							<img src={item.imageUrl}></img>
							<div className="room-list__info-title">
								<p>{item.name}</p>
								<p className="room-list__info-detail"> <span>NT.{item.normalDayPrice}</span> 平日 NT.{item.holidayPrice}假日  </p>
							</div>
						</Link>
					))
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		rooms: state.rooms.data
	};
}

RoomList.propTypes = propTypes;
RoomList.defatulProps = defatulProps;

export default connect(mapStateToProps)(RoomList);