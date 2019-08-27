import {
	START_BOOKING_ROOM,
	BOOKING_ROOM_SUCCESS,
	BOOKING_ROOM_FAILED,
} from './action-type';
import { updateRoomBook } from './room-info-actions';
import { header, apiUrl } from '../lib/api';


export function bookingRoom(id, bookingInfo) {
	return dispatch => {
		dispatch(startBookingRoom());
		return fetch(`${apiUrl}/room/${id}`,{
			type: 'POST',
			headers: header(),
			body: bookingInfo
		})
			.then(response => response.json())
			.then(data => {
				dispatch(bookingRoomSuccess());
				dispatch(updateRoomBook(data.booking));
			})
			.catch(error => {
				dispatch(bookingRoomFailed(error));
			});
	};
}

export function startBookingRoom() {
	return {
		type: START_BOOKING_ROOM,
	};
}

export function bookingRoomSuccess() {
	return {
		type: BOOKING_ROOM_SUCCESS,
	};
}

export function bookingRoomFailed(error) {
	return {
		type: BOOKING_ROOM_FAILED,
		error,
	};
}
