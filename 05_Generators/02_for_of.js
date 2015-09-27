var foo = function* () {
	var x = 2;
	yield x * 1;
	yield x * 2;
	yield x * 3;
	yield x * 4;
    // return x * 5;
};

for (var curr of foo()) {
    console.log( curr );
}