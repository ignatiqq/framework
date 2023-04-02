import { TEXT_NODE } from '../hyperscript/constants';
import { subscribe } from '../signals/signals';
import { isFunction } from '../utils/index';
import {property} from './property';

// @TODO add requestIdleCallback to do work without ui stuck

export function render(root, h) {
	if(!root) {
		if(process.env === 'development') throw new Error(`Root ${root} is not valid element`); 
		return;
	}

	let element;

	if(h.type) {
		
		if(h.type === TEXT_NODE) {
			element = document.createTextNode('');
		} else if (isFunction(h.type)) {
			subscribe(function insert() {
				console.log('AFTER FC: ', h.type(), {root});
				render(root, h.type());
			});
		} else {
			element = document.createElement(h.type);
		}

	} else if(isFunction(h)) {
		console.log('isFunction (h) not type');
		// subscribe to rerender on signal dependencies change (update)
		// subscribe(function insert() {
		// 	render(root, h.type());
		// });
	}

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

function setPropertiesToElement(element, props) {
	// remove children property
	const propsWithoutChildren = Object.keys(props).filter(prop => prop !== 'children');

	propsWithoutChildren.forEach((name) => {
		property(element, name, props[name]);
	});
}