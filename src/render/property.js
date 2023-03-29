import { isFunction } from '../utils/index.js';

export function property(element, name, property, isCss = false) {
	console.log({element, name, property});
	if(isFunction(property)) {
		handleEvent(name, element, property);
	} else if(isAttribute(name)) {
		element.setAttribute(name, property);
	} else if(isCss) {
		element.style.setProperty(name, property);
	} else if(isStyle(name)) {
		if(typeof property === 'string') {
			element.style.cssText = property;
		}

		if(typeof property === 'object') {
			for(let name in property) {
				property(element, name, property[name], true);
			}
		}
	} else if(isClassProperty(name)) {
		element.classList.add(property);
	} else {
		element[name] = property;
	}
}

function handleEvent(name, element, fn) {
	name = name.slice(2).toLowerCase();

	element.addEventListener(name, fn);
}

function isAttribute(name) {
	return name.startsWith('data-') || name.startsWith('aria');
}

function isStyle(name) {
	return name === 'style';
}

function isClassProperty(name) {
	return name.toLowerCase() === 'classname';
}