function printLowReturnHigh (array) {
    //delcare min and max variable and assign starting value
    var min = array[0];
    var max = array[0];

    //for loop cycling through array and checking min and max values against array
    for (var x = 0; x < array.length; x++) {

        //if statement comparing array against min value
        if (array[x] < min) {
            //assign new min value if lower than current
            min = array[x];
        }

        //if statement comparing array against max value 
        if (array[x] > max) {
            //assign new max value if greater
            max = array[x];
        }
    }

    //print min value
    console.log("Min value is " + min);

    //return max
    return max;

}

//test function
var array = [3,6,7,1,9,10];

console.log("The max value is " + printLowReturnHigh(array));