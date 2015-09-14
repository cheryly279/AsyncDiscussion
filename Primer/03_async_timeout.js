var fun1 = function() {
    console.log('in fun1!');
};

var fun2 = function() {
    console.log('in fun2!');
};

var fun3 = function() {
    console.log('in fun3!');
};

fun1();
setTimeout(fun2, 2000);
fun3();
console.log('weeeeeeeee!');