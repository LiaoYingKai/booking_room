import {
	ADD_TODO,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAIL,
} from '../../actions/action-type'

const initState = {
	data: [],
	loadStatus: '',
	errorMessage: '',
}
export default function todo(state = initState, action){
	switch(action.type){
		case ADD_TODO: {
			return {
				data: state,
				loadStatus: 'start',
				errorMessage: '',
			}
		}
		case ADD_TODO_SUCCESS: {
			return {
				data: [ ...state.data, action.todo ],
				loadStatus: 'success',
				errorMessage: '',
			}
		}
		case ADD_TODO_FAIL: {
			return {
				data: state,
				loadStatus: 'fail',
				errorMessage: action.error,
			}
		}
		default: {
			return state
		}
	}
}