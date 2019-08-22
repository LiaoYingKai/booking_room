import {
	FETCH_ROOM_INFO_SUCCESS,
	FETCH_ROOM_INFO_FAILED,
	START_FETCH_ROOM_INFO,
} from '../../actions/action-type';
import { LoadingStatusEnums } from '../../lib/LoadingStatusEnums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = {
	booking:[],
	room: {},
	loadingStatus: NONE,
	errorMessage: ''
};

export default function roomList(state = initState, action) {
	switch (action.type) {
		case START_FETCH_ROOM_INFO: {
			return Object.assign({}, initState, { loadingStatus: LOADING, });
		}
		case FETCH_ROOM_INFO_SUCCESS: {
			const { booking, room } = action.room;

			return {
				booking,
				room,
				loadingStatus: SUCCESS,
				errorMessage: '',
			};
		}
		case FETCH_ROOM_INFO_FAILED: {
			return Object.assign({}, initState, { loadingStatus: FAILED, errorMessage: action.error });
		}
		default: {
			return state;
		}
	}
}