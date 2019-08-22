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
	data: {},
	loadingStatus: NONE,
	errorMessage: ''
};

export default function roomList(state = initState, action) {
	switch (action.type) {
		case START_FETCH_ROOM_INFO: {
			return {
				data: {},
				loadingStatus: LOADING,
				errorMessage: ''
			};
		}
		case FETCH_ROOM_INFO_SUCCESS: {
			console.log("tets")
			return {
				data: action.room ,
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