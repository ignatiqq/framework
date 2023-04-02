import { TEXT_NODE } from '../../src/hyperscript/constants';
import framework from '../../src/index';
import { createEffect, createSignal } from '../../src/signals/signals';



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


/** @jsx framework.h */

const AnotherComponent = () => {
	console.log('Anothercomnponent');

	return (<h1>Another Component</h1>);
};

const Component = () => {
	const [value, setValue] = createSignal([]);

	createEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => {
				setValue([...value(), json]);
			});
	});

	// try to implement query users and easy view

	const titleCard = (user) => <h1>{user.title}</h1>; 

	createEffect(() => {
		console.log('check log: ', value());
	});

	const renderUsers = () => {
		console.log('renderUSERS VALUE: ', value().map(titleCard));
		return value().length > 0 ? <div>{value().map(titleCard)}</div> : 'no users found';
	};
	console.log('Component RERENDER');

	return (
		<div>
			<h1 className="hello">Hello world 123</h1>
			<p style="color: red">It's very simple counter frameword signals example</p>
			<AnotherComponent />
            
			<div id="map">Count: {renderUsers}</div>
			{/* <section>For test: {value}</section> */}
			{/* <button onClick={() => setValue((prev) => prev + 1)}>increment</button>
			<button onClick={() => setValue((prev) => prev - 1)}>decrement</button> */}
		</div>
	);
};


window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#root');
	console.log({framework, root});
	console.log(<Component />);
	framework.render(root, <Component />);
	// createEffect(() => {
	// const interval = setInterval(() => console.log('will clear every time: ', value()), 1000);
	// console.log('new effect val: ', interval, 'value : ', value());
	// onCleanup(() => clearInterval(interval));
	// });
	// createEffect(() => {
	// 	console.log('effect');
	// framework.render(root, framework.h('div', {id: '123', onClick: () => console.log('123')}, 
	// 	framework.h('p', {className: 'p-class'}, framework.h(TEXT_NODE, {
	// 		nodeValue: value,
	// 	})),
	// 	framework.h('input', {onInput: (e) => setValue(e.target.value), value: value})
	// ));


	// });
	// setInterval(() => setValue((val) => val + 1), 5000);
	// framework.render(root, framework.h(FunctionComponent, {hello: 'Hello world!'}));
});