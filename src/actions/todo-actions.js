import {
	ADD_TODO,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAIL,
} from './action-type'

export function addTodo(todo) {
	return {
		type: ADD_TODO,
		todo,
	}
}

export function addTodoSuccess(todo){
	return {
		type: ADD_TODO_SUCCESS,
		todo,
	}
}

export function addTodoFail(error){
	return {
		type: ADD_TODO_FAIL,
		erroe,
	}
}

export function asyncAddTodo(todo){
	return dispatch => {
		return setTimeout(()=>{
			dispatch(addTodoSuccess(todo))
		},2000)
	}
}

// useing react thunk
// export function getAlbum(){
//     return dispatch => {
//         // dispatch(getUserAlbums());
//         return fetch('http://localhost:3000/search?keywords=頑童', {
//             method: 'GET',
//         })
//         .then(response => {
//             return response.json()
//         })
//         .then(data=>{
//             console.log(data)
//         })
//         .catch(error => dispatch(getUserAlbumsError(error)));
//         };
// }