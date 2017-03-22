function findAvg(arr) {
    //declare variable to store sum and avg
    var sum = 0;
    var avg = 0;

    //for loop to cycle through array values
    for(var x = 0; x < arr.length; x++) {
        //sum all values in the array
        sum = arr[x] + sum;
    }

    //calculate avg
    avg = sum / arr.length;

}