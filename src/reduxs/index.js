import { combineReducers } from 'redux';
import rooms from './reducer/rooms';
import roomInfo from './reducer/room-info';
import bookingRoom from './reducer/booking-room';

const musicPlayer = combineReducers({
	rooms,
	roomInfo,
	bookingRoom
});

export default musicPlayer;