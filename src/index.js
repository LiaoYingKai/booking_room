import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxs from './reduxs'
import Layout from './layout'
import './style.scss'

let store = createStore(
	reduxs,
	applyMiddleware(thunk, logger),
)

function App() {
	return (
		<Provider store={store}>
			<Layout/>
		</Provider>
	)
}

ReactDOM.render(<App/>, document.getElementById('App'))
