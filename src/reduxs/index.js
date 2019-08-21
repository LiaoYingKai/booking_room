import { combineReducers } from 'redux';
import rooms from './reducer/rooms';


const musicPlayer = combineReducers({
	rooms
});

export default musicPlayer;