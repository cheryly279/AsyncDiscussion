var fun1 = function() {
    console.log('in fun1!');
};

var fun2 = function() {
    // pause for 2 seconds
    var until = new Date().getTime() + 2000; 
    while(new Date().getTime() < until) {}; 

    console.log('in fun2!');
};

var fun3 = function() {
    console.log('in fun3!');
};

fun1();
fun2();
fun3();
console.log('weeeeeeeee!');