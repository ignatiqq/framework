import { createEffect } from '../signals/signals.js';
import { isFunction } from '../utils/index.js';

export function property(element, name, prop, isCss = false) {
	if(isFunction(prop)) {
		if(prop.$signal) {
			createEffect(() => {
				// initialize effect for property (signal) change
				// after any signal "set" any state
				// it will trigger update property to dom element
				const propVal = prop();
				console.log({element, name, propVal, isCss});
				property(element, name, propVal, isCss);
			});
		} else {
			handleEvent(name, element, prop);
		}
	} else if(isAttribute(name)) {
		element.setAttribute(name, prop);
	} else if(isCss) {
		element.style.setProperty(name, prop);
	} else if(isStyle(name)) {
		if(typeof prop === 'string') {
			element.style.cssText = prop;
		}

		if(typeof prop === 'object') {
			for(let name in prop) {
				property(element, name, prop[name], true);
			}
		}
	} else if(isClassProperty(name)) {
		element.classList.add(prop);
	} else {
		element[name] = prop;
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