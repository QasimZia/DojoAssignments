function findMax(arr) {
    //declare variable to store max 
    var max = arr[0];

    //for loop to cycle through array checking for max
    for(var x = 0; x < arr.length; x++) {

        //check each value against max
        if(arr[x] > max) {
            max = arr[x];
        }

    }

    //print max value
    console.log(max);
}