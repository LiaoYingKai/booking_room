import {
	START_BOOKING_ROOM,
	BOOKING_ROOM_SUCCESS,
	BOOKING_ROOM_FAILED,
} from '../../actions/action-type';
import { LoadingStatusEnums } from '../../lib/LoadingStatusEnums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = {
	loadingStatus: NONE,
	errorMessage: ''
};

export default function bookingStatus(state = initState, action) {
	switch (action.type) {
		case START_BOOKING_ROOM: {
			return { loadingStatus: LOADING, errorMessage: '' };
		}
		case BOOKING_ROOM_SUCCESS: {
			return { loadingStatus: SUCCESS, errorMessage: '' };
		}
		case BOOKING_ROOM_FAILED: {
			return { loadingStatus: FAILED, errorMessage: '' };
		}
		default: {
			return state;
		}
	}
}