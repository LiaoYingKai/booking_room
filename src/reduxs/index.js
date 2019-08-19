import { combineReducers } from 'redux'
import todo from './reducer/todo'
import rooms from './reducer/rooms'


const musicPlayer = combineReducers({
	todo,
	rooms
})

export default musicPlayer;