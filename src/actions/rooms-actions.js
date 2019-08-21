import {
	START_FETCH_ROOMS,
	FETCH_ROOMS_SUCCESS,
	FETCH_ROOMS_FAILED,
} from './action-type';
import { header, apiUrl } from '../lib/api';

export function startFetchRooms() {
	return {
		type: START_FETCH_ROOMS,
	};
}

export function fetchRoomsSuccess(rooms) {
	return {
		type: FETCH_ROOMS_SUCCESS,
		rooms,
	};
}

export function fetchRoomsFailed(error) {
	return {
		type: FETCH_ROOMS_FAILED,
		error,
	};
}

export function fetchRooms() {
	return dispatch => {
		dispatch(startFetchRooms());
		return fetch(`${apiUrl}/rooms`,{
			method: 'GET',
			headers: header()
		})
			.then(response => response.json())
			.then(data => {
				dispatch(fetchRoomsSuccess(data.items));
			})
			.catch(error => {
				dispatch(fetchRoomsFailed(error));
			})
	}
}
