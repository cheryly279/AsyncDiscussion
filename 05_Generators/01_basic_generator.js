var foo = function* () {

	console.log('start of function');

	var x = yield 1;
	
	console.log('after first yield, x: ' + x);
	
	var y = yield 2;
	
	console.log('after final yield, y: ' + y);
	
	return 'returnVal';
};


var gen = foo();
var ret1 = gen.next();
console.log('ret1: ' + JSON.stringify(ret1));
var ret2 = gen.next();
console.log('ret2: ' + JSON.stringify(ret2));
var ret3 = gen.next();
console.log('ret3: ' + JSON.stringify(ret3));
var ret4 = gen.next();
console.log('ret4: ' + JSON.stringify(ret4));
var ret5 = gen.next();
console.log('ret5: ' + JSON.stringify(ret5));
