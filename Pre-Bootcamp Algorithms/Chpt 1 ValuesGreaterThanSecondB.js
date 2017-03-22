function valuesGreaterThanSecond (array) {

    //declare counter
    //delcare array with greaterThan values
    var greaterThan = 0;
    var greaterArray = [];

    //cycle through array checking values against 2nd 
    for (var x = 0; x < array.length; x++) {
        //check each value against second value in array, push greater values into new array
        if (array[x] > array[1]) {
            greaterArray.push(array[x]);
            greaterThan++;
        }

    }

    console.log(greaterArray);

    return greaterArray;
}

var array = [3,6,2,8,9,4];

//call function
var arrayB = valuesGreaterThanSecond(array);

//output result
console.log("There are " + arrayB.length + " values greater than the second value.");