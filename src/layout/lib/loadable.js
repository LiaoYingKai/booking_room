import React from 'react'
import Loadable from 'react-loadable'

export default function(options){
	return Loadable(Object.assign({
		loading: Loading,
	}, options))
}
const Loading = () =>{
	return <div> Loading... </div>
}