import {
	FETCH_ROOM_INFO_SUCCESS,
	FETCH_ROOM_INFO_FAILED,
} from '../../actions/action-type';
import { LoadingStatusEnums } from '../../lib/LoadingStatusEnums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = {
	data: {},
	loadingStatus: NONE,
	errorMessage: ''
};

export default function roomList(state = initState, action) {
	switch (action.type) {
		case FETCH_ROOM_INFO_SUCCESS: {
			return {
				data: Object.assign({},state.data,{ [action.room.id]: action.room }),
				loadingStatus: SUCCESS,
				errorMessage: '',
			};
		}
		case FETCH_ROOM_INFO_FAILED: {
			return {
				data: state,
				loadingStatus: FAILED,
				errorMessage: action.error,
			};
		}
		default: {
			return state;
		}
	}
}