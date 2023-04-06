import { isFunction, isObject } from '../utils/index';
import { TEXT_NODE, VALID_HYPERSCRIPT_TYPES } from './constants';

export function h(type, props, ...children) {
	validateTagType(type);

	return {
		type,
		props: {
			...props,
			children: children.map(child => {
				if(isObject(child)) return child;
				else if (isFunction(child)) return createFunctionalNode(child);
				else if (typeof child === 'string') return createTextNode(child);
				return child;
			}),
		}
	};
}

function validateTagType(type) {
	if(!VALID_HYPERSCRIPT_TYPES.includes(type) && !isFunction(type)) {
		throw new Error('Invalid hyperscript tag type');
	}
}

// /**
//  * Used for inline function's which return jsx (components)
//  * @example:
//  * <div>{renderUsers}</div>
//  */
export function createFunctionalNode(fn) {
	return {
		$inlineSignal: true,
		type: fn,
		props: {},
		children: [],
	};
}

export function createTextNode(text) {
	return {
		type: TEXT_NODE,
		props: {
			nodeValue: text,
		},
	};
}