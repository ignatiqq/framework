import { TEXT_NODE } from '../hyperscript/constants';
import { isFunction } from '../utils/index';
import {property} from './property';

export function render(root, h) {
	if(!root) {
		if(process.env === 'development') throw new Error('Root is not valid selector'); 
		return null;
	}

	if(isFunction(h.type)) {
		h = h.type(h.props);
	}

	const element = h.type === TEXT_NODE ?
		document.createTextNode('') : 
		document.createElement(h.type);

	if(h.props) {
		const propsWithoutChildren = Object.keys(h.props).filter(prop => prop !== 'children');
		propsWithoutChildren.forEach((name) => {
			property(element, name, h.props[name]);
		});
	}

	if(h.props.children && h.props.children.length) {
		h.props.children.forEach((child) => {
			render(element, child);
		});
		root.append(element);
	} else {
		root.append(element);
	}
}