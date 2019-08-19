import React, { Component, } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { fetchRooms } from '../../actions/rooms-actions'

class RoomList extends Component{
	render(){
		return (
			<div>Hello World</div>
		)
	}
	componentDidMount(){
		this.props.fetchRooms()
	}
}

function mapStateToProps(state){
	return {
		todos: state.todo.data,
	}
}
function mapDispatchToProps(dispatch){
	return  {
		fetchRooms: () => dispatch(fetchRooms())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomList)