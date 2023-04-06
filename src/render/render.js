import { FUNCTIONAL_COMPONENT, FUNCTION_NODE, TEXT_NODE } from '../hyperscript/constants';
import { subscribe } from '../signals/signals';
import { isFunction } from '../utils/index';
import {property} from './property';

// @TODO add requestIdleCallback to do work without ui stuck

export function render(root, h) {
	if(!root) {
		if(process.env.NODE_ENV === 'development') throw new Error(`Root ${root} is not valid element`); 
		return;
	}

	let element;

	if(h.type) {
		if(h.type === TEXT_NODE) {
			element = document.createTextNode('');
		} else if (isFunction(h.type)) {
			// show inline functional signals
			if(h.$inlineSignal) {
				subscribe(function insert() {
					const val = h.type();

					// support inline jsx (hypescript) arrays
					if(Array.isArray(val)) {
						val.forEach((item) => {
							console.log('iteration item: ', {item});
							render(root, item);
						});
					} else {
						render(root, val);
					}
				});
			// render functional component
			} else {
				subscribe(function insert() {
					render(root, h.type(h.props));
				});
			}
		} else {
			element = document.createElement(h.type);
		}

	}

	if(element) {
		if(h.props) {
			setPropertiesToElement(element, h.props);
		}
	
		if(h.props.children && h.props.children.length) {
			h.props.children.forEach((child) => {
				render(element, child);
			});
		}
	
		// add every element to current root
		root.append(element);
	}
}

function setPropertiesToElement(element, props) {
	// remove children property
	const propsWithoutChildren = Object.keys(props).filter(prop => prop !== 'children');

	propsWithoutChildren.forEach((name) => {
		property(element, name, props[name]);
	});
}