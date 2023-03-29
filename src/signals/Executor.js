
class Executor {
	constructor(context, fn) {
		this._observables = new Set();
		this._cleanupCallbacks = new Set();
		this._context = context;
		this.fn = fn;
 
		this.execute = this.execute.bind(this);
		this.cleanup = this.cleanup.bind(this);   
		this.addCleanupCallback = this.addCleanupCallback.bind(this);     
	}

	addCleanupCallback(cb) {
		this._cleanupCallbacks.add(cb);
	}

	onCleanup() {
		for(const cb of [...this._cleanupCallbacks]) {
			console.log('tocleanup: ', cb);
			cb();
		}
	}

	onUpdateObservables() {
		for(const observable of [...this._observables]) {
			observable.delete(this);
		}
		this._observables.clear();
	}

	cleanup() {
		this.onUpdateObservables();
		this.onCleanup();
	}

	execute() {
		if(!this.fn) {
			// if(process.env === 'development') {
			// throw new Error('Executor.execute fn is not defined');
			// }
			return;
		}
		this.executeFn(this.fn);
	}

	executeFn(fn) {
		try {
			// мы должны определять и переопределять подписки во время выполенения
			/**
             * @example
             * например у нас есть такой код:
             * const [flag, setFlag] = createSignal(false);
             * const [val1, setVal1] = createSignal(1);
             * const [val2, setVal2] = createSignal(2);
             * 
             * createEffect(() => flag ? val1() : val2());
             * первый раз он выведет однерку, но что если:
             * 
             * setFlag(true);
             * 
             * эффект должен очистить предыдущие полписки перед началом выполнения, 
             * для того, чтобы в случае чего подписаться на новые сигналы.
             * 
             * в данном случае в this.cleanup() мы отписываемся от (всех) val1 подписчика
             * и подписываемся на нового val2();
             * 
             * и при обновлении setVal1(2) эффект уже не должен отрабатывать, так как нам нет смысла
             * больше за ним следить
             * 
             * "МИНИМАЛЬНЫЙ СОГЛАСОВАННЫЙ НАБОР ПОДПИСОК МОЖЕТ БЫТЬ ДОСТИГНУТ ТОЛЬКО В ТОМ СЛУЧАЕ,
             * ЕСЛИ ОНИ ОПРЕДЕЛЕНЫ ВО ВРЕМЯ ВЫПОЛНЕНИЯ"
             */
			this.cleanup();
			this._context.push(this);
			fn();
		} catch (error) {
			// if(process.env === 'development') {
			// throw new Error('Executor.executeFn fn throws an error: ', error);
			// }
			console.error(error);
		} finally {
			console.log('FINALLY');
			this._context.pop();
		}
	}
}

export default Executor;