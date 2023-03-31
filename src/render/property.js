import { createEffect, onCleanup } from '../signals/signals';
import { isFunction } from '../utils/index';
import { render } from './render';

export function property(element, name, prop, isCss = false) {
	if(isFunction(prop)) {
		if(prop.$signal) {
			// добавить сравнения и ануманты и маунты функций и тд
			// оптимизация этого кодана дестрой и тд
			// например раньше показывался, потом не показывается
			// добавить компонент жизненного цикла
			createEffect(() => {
				// initialize effect for property (signal) change
				// after any signal "set" any state
				// it will trigger update property to dom element
				const propVal = prop();
				console.log({element, name, propVal, isCss});
				property(element, name, propVal, isCss);

				// можно удалить все функции здесь, например
				// onCleanup(() => {
                    
				// });
			});
		} else if(isFunctionHandler(name)){
			handleEvent(name, element, prop);
		} else {
			createEffect(() => {
				console.log('PROPERY EFFECT: ', {element, name, prop: prop(), isCss});
				property(element, name, prop(), isCss);
			});
		}
	} else if(Array.isArray(prop)) {
		console.log('IS ARRAY: ', {prop});
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

function isFunctionHandler(name) {
	return (name[0] === name[1]) && (name[1].toLowerCase !== name[1]);
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