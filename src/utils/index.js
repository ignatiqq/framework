export function isObject(el) {
    return typeof el === 'object' && !Array.isArray(el) && el !== null;
}

export function isFunction(el) {
    return typeof el === 'function';
}