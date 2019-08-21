import { combineReducers } from 'redux';
import rooms from './reducer/rooms';
import roomInfo from './reducer/room-info';

const musicPlayer = combineReducers({
	rooms,
	roomInfo
});

export default musicPlayer;