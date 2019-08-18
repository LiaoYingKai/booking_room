import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addTodoSuccess, asyncAddTodo } from '../../actions/todo-actions'
import './style.scss';

class About extends Component {
	constructor(){
		super();
		this.state = {
			inputValue: '',
		}
		this._handleChangeValue = this._handleChangeValue.bind(this)
	}

	_handleChangeValue(event){
		this.setState({
			inputValue: event.target.value
		})
	}
	render() {
		const { inputValue } = this.state
		const { _handleChangeValue } = this
		const { todos, addTodoSuccess, asyncAddTodo } = this.props

		return (
			<div className="about">
				<div >
					TODO：
					<input onChange={ (event) => { _handleChangeValue(event) }} value={inputValue}></input>
					<button onClick={ () => { addTodoSuccess(inputValue)} }>同步 Add</button>
					<button onClick={ () => { asyncAddTodo(inputValue) } }>非同步 Add</button>
				</div>
				<ul>
					{
						todos.map((item, index) =>(
							<li key={`${item}__${index}`}>
								{item}
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}


function mapStateToProps(state){
	return {
		todos: state.todo.data,
	}
}
function mapDispatchToProps(dispatch){
	return  {
		addTodoSuccess: (todo) => dispatch(addTodoSuccess(todo)),
		asyncAddTodo: (todo) => dispatch(asyncAddTodo(todo))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(About)
