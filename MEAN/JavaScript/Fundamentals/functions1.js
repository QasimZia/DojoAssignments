/* ------------------------------------------------- */

function runningLogger() {
    console.log('I am running!');
}

/* ------------------------------------------------- */

function multiplybyTen(num) {
    num = num * 10;

    return num;
}

multiplybyTen(5);

/* ------------------------------------------------- */

function stringReturnOne() {
    return 'This is a string1';
}

function stringReturnTwo() {
    return 'This is another string';
}

/* ------------------------------------------------- */

function caller(x) {
    console.log(typeof(x));
    if(typeof(x) == 'function') {
        x();
    }
}

// caller(stringReturnTwo);

/* ------------------------------------------------- */

function myDoubleConsoleLog(x, y) {
    if(typeof(x) == 'function' && typeof(y) == 'function'){
        console.log(x());
        console.log(y());
    }
}

/* ------------------------------------------------- */

function caller2(x) {
    console.log('Starting');
    if(typeof(x) == 'function') {
        setTimeout(function() {console.log(x());}, 2000);
    }
    console.log('ending?');

    return 'interesting';
}

console.log(caller2(myDoubleConsoleLog));