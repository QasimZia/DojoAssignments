function fib() {
    var first = 0;
    var second = 1;

    function nacci() {
        console.log(second);
        var temp = first;
        first = second;
        second = first + temp;
    }

    return nacci;
}

var fibCounter = fib();

fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();

