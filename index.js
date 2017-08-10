import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './src/reducers'
import CounterFinal from './src/container'
import ReactDOM from 'react-dom'

let store  = createStore(counterReducer)

ReactDOM.render(
		<Provider store={store}>
		<CounterFinal/>
		</Provider>,
		document.getElementById('root')
	);