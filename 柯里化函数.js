
function curry(a, b) {
    return function (b) {
        return a + b
    }
}
// console.log(curry(1)(2))

const curry1 = (fn, args = []) => (..._args) => {
    let ary = args.concat(_args)
    return _args.length > 0 ? curry1(fn, ary) : fn(ary)
}
let add = curry1((args) => {
    return args.reduce((u1, u2) => u1 + u2)
})
// console.log(add(1)(2)())
function currying(fn, allArgs = []) {
    function next() {
        allArgs = allArgs.concat(Array.from(arguments));
        return next;
    }
    next.toString = () => fn.apply(null, allArgs);
    next.valueOf = () => fn.apply(null, allArgs);
    return next;
}
var add1 = currying(function () {
    console.log(Array.from(arguments))
});
// console.log(add1(1, 3)(2).valueOf())
function curry3(fn, arr = []) {
    return function (...args) {
        return args.length === fn.length ? fn(...arg) : curry(fn, [...arr, ...args])
    }
}


let add3 = curry3((a, b, c, d) => {
    return a + b + c + d
})
console.log(add(3)(4)(5)(7)())
const curry4 = (fn, arr = []) => (...args) => (
    arg => arg.length === fn.length
      ? fn(...arg)
      : curry(fn, arg)
  )([...arr, ...args])

