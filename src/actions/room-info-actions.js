import {
	START_FETCH_ROOM_INFO,
	FETCH_ROOM_INFO_SUCCESS,
	FETCH_ROOM_INFO_FAILED,
	UPDATE_ROOM_BOOK,
} from './action-type';
import { header, apiUrl } from '../lib/api';

export function fetchRoomInfo(id) {
	return dispatch => {
		dispatch(startFetchRoomInfo());
		return fetch(`${apiUrl}/room/${id}`,{
			type: 'GET',
			headers: header(),
		})
			.then(response => response.json())
			.then(data => {
				dispatch(fetchRoomInfoSuccess(data));
			})
			.catch(error => {
				dispatch(fetchRoomInfoFailed(error));
			});
	};
}

export function startFetchRoomInfo() {
	return {
		type: START_FETCH_ROOM_INFO,
	};
}

export function fetchRoomInfoSuccess(room) {
	return {
		type: FETCH_ROOM_INFO_SUCCESS,
		room
	};
}

export function fetchRoomInfoFailed(error) {
	return {
		type: FETCH_ROOM_INFO_FAILED,
		error
	};
}

export function updateRoomBook(booking) {
	return {
		type: UPDATE_ROOM_BOOK,
		booking,
	};
}
