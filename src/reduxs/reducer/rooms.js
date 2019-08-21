import {
	START_FETCH_ROOMS,
	FETCH_ROOMS_SUCCESS,
	FETCH_ROOMS_FAILED,
} from '../../actions/action-type';
import { LoadingStatusEnums } from '../../lib/LoadingStatusEnums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = {
	data: [],
	loadingStatus: NONE,
	errorMessage: ''
};

export default function roomList(state = initState, action) {
	switch (action.type) {
		case START_FETCH_ROOMS: {
			return Object.assign({}, initState, { loadingStatus: LOADING, });
		}
		case FETCH_ROOMS_SUCCESS: {
			return {
				data: action.rooms,
				loadingStatus: SUCCESS,
				errorMessage: '',
			};
		}
		case FETCH_ROOMS_FAILED: {
			return {
				data: [],
				loadingStatus: FAILED,
				errorMessage: action.error,
			};
		}
		default: {
			return state;
		}
	}
}