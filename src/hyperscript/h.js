import { isFunction, isObject } from '../utils/index.js';
import { TEXT_NODE, VALID_HYPERSCRIPT_TYPES } from './constants.js';

export function h(type, props, ...children) {
	validateTagType(type);

	return {
		type,
		props: {
			...props,
			children: children.map(child => {
				return isObject(child) ? child : textNode(child);
			}),
		}
	};
}

function validateTagType(type) {
	if(!VALID_HYPERSCRIPT_TYPES.includes(type) && !isFunction(type)) {
		throw new Error('Invalid hyperscript tag type');
	}
}

export function textNode(text) {
	return {
		type: TEXT_NODE,
		props: {
			nodeValue: text,
		},
	};
}