function countPositives (array) {

    //counter variable for number of positive integers
    var positive = 0;

    //for loop cycling through array to count positive integers
    for(var x = 0; x < array.length; x++) {

        //check if value is positive
        if (array[x] > 0) {
            //increment counter
            positive++;
        }

    }

    //change last value of last index in array to number of positives in array
    array[array.length-1] = positive;

    //return new array
    return array;
}

//call function
console.log(countPositives([-1,1,1,1]));

