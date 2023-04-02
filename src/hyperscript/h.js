import { isFunction, isObject } from '../utils/index';
import { TEXT_NODE, VALID_HYPERSCRIPT_TYPES } from './constants';

export function h(type, props, ...children) {
	validateTagType(type);

	return {
		type,
		props: {
			...props,
			children: children.map(child => {
				// check is function
				return isObject(child) ? child : createTextNode(child);
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
// export function createFunctionalComponent() {

// }

export function createTextNode(text) {
	return {
		type: TEXT_NODE,
		props: {
			nodeValue: text,
		},
	};
}