import { connect } from 'react-redux';
import { incrementCounter, decrementCounter} from './actions.js';
import Counter from './App'

const mapStateToProps = state => {
	return {
		value  : state.counter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncrement : () => { dispatch(incrementCounter()) },
		onDecrement : () => {dispatch(decrementCounter())}
	}
}

const CounterFinal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterFinal

