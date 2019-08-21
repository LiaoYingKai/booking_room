import React, { Component, } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRooms } from '../../actions/rooms-actions'

class RoomList extends Component{
	render(){
		const { rooms } = this.props
		return (
			<div className="room-list">
				{
					rooms.map(item => (
						<Link className="room-list__info" key={item.id} to={`rooms/${item.id}`}>
							<img src={item.imageUrl}></img>
							<div>
								{item.name}
							</div>
						</Link>
					))
				}
			</div>
		)
	}
	componentDidMount(){
		this.props.fetchRooms()
	}
}

function mapStateToProps(state){
	return {
		rooms: state.rooms.data
	}
}
function mapDispatchToProps(dispatch){
	return  {
		fetchRooms: () => dispatch(fetchRooms())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomList)