import {
	FETCH_ROOM_INFO_SUCCESS,
	FETCH_ROOM_INFO_FAILED,
} from './action-type';

export function getRoomInfoSuccess(room) {
	return {
		type: FETCH_ROOM_INFO_SUCCESS,
		room
	};
}

export function getRoomInfoFailed(error) {
	return {
		type: FETCH_ROOM_INFO_FAILED,
		error
	};
}
