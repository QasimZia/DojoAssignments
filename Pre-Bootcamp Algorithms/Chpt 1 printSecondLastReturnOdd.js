function printSecondLastReturnOdd (array) {
    //print second to last value in array
    console.log(array[array.length-2]);

    //for loop to cycle through array
    for (var x = 0; x <array.length; x++) {

        //check if value is odd
        if ((array[x] % 2) != 0) {
            //return first odd
            return array[x];
        }

    }
}