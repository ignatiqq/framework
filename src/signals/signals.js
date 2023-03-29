import { isFunction } from '../utils/index.js';
import Executor from './Executor.js';

let context = [];

function getRunnningExecutor() {
	return context[context.length - 1];
}

export function createSignal(initialValue) {
	let state = initialValue;
	const _observers = new Set();

	function getValue() {
		const contextExecutor = getRunnningExecutor();

		if(contextExecutor) {
			_observers.add(contextExecutor);
			contextExecutor._observables.add(_observers);
		}

		return state;
	}

	function setValue(nextVal) {
		if(isFunction(nextVal)) {
			const result = nextVal(state);
			state = result;
		}

		if(!isFunction(nextVal)) {
			state = state + nextVal;
		}

		if(_observers.size > 0) {
			// convert set to array to iterate it
			for(const observer of [..._observers]) {
				observer.execute();
			}
		}
	}

	return [getValue, setValue];
}

export function createEffect(fn) {
	const executor = new Executor(context, fn);
	executor.execute();
}

export function onCleanup(fn) {
	const executor = getRunnningExecutor();
	executor.addCleanupCallback(fn);
}

// @TODO REALIZE BATCH UPDATES https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf#:~:text=The%20easiest%20way%20to%20demonstrate%20how%20this%20works%20is%20to%20apply%202%20changes

// export function subscribe(fn) {
//     createEffect(fn);
// }