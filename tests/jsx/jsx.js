import { TEXT_NODE } from '../../src/hyperscript/constants.js';
import framework from '../../src/index.js';
import { createSignal } from '../../src/signals/signals.js';

// const el = <div id="123" onClick={() => console.log("123")}><p>Hello world</p></div>;


// const el = framework.h('div', {id: '123', onClick: () => console.log("123")}, 
//     framework.h('p', {className: 'p-class'}, framework.h(TEXT_NODE, {
//         nodeValue: value(),
//     }))
// )


// /** @jsx framework.h */
// function FunctionComponent({hello}, root) {
// 	console.log({hello});

// 	const [count, setCount] = createSignal(0);

// setInterval(() => setCount((prev) => prev + 1), 1000);

// const view = () => {
// 	return framework.h('div', {}, 
// 		framework.h('TEXT_NODE', {nodeValue: count()}));
// };

// createEffect(() => root.append(view()));
// }

const [value, setValue] = createSignal('hello wolrd');


window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#root');
	// createEffect(() => {
	// const interval = setInterval(() => console.log('will clear every time: ', value()), 1000);
	// console.log('new effect val: ', interval, 'value : ', value());
	// onCleanup(() => clearInterval(interval));
	// });
	// createEffect(() => {
	// 	console.log('effect');
	framework.render(root, framework.h('div', {id: '123', onClick: () => console.log('123')}, 
		framework.h('p', {className: 'p-class'}, framework.h(TEXT_NODE, {
			nodeValue: value,
		})),
		framework.h('input', {onInput: (e) => setValue(e.target.value), value: value})
	));


	// });
	// setInterval(() => setValue((val) => val + 1), 5000);
	// framework.render(root, framework.h(FunctionComponent, {hello: 'Hello world!'}));
});