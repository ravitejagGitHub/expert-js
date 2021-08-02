/**
 https://theanubhav.com/2019/02/03/js-currying-in-interview/
 */

function add(x) {
	let sum = x;
	function resultFn(y) {
		if (arguments.length === 0) {
			return sum;
		}
		sum += y;
		return resultFn;
	}
	resultFn.valueOf = function () {
		return sum;
	};
	return resultFn;
}
console.log(a(1)(2) + 5); // 8
console.log(a(1)(2)()); // 3


var sum2 = function (...args) {
	return Object.values(args).reduce((a, b) => a + b, 0);
};


function sum(a) {
	if (arguments.length > 1) {
		return Object.values(arguments).reduce((a, b) => a + b, 0);
	}

	return function (b) {
		if (b) {
			return sum(a + b); // it takes an argument and return a function which again can take an argument.
		}
		return a; // it will keep on adding 1+2+3+4..
	};
}

function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
}
