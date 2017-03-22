function valuesGreaterThanSecond () {
    //declare array
    var array = [1,3,5,7,9,13];
    //declare counter
    var greaterThan = 0;

    //cycle through array checking values against 2nd 
    for (var x = 0; x < array.length; x++) {
        //check each value against second value in array
        if (array[x] > array[1]) {
            greaterThan++;
        }

    }

    return greaterThan;
}

//output result
console.log(valuesGreaterThanSecond());