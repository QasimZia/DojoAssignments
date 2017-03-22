function greaterThanY(arr, y) {

    //for loop to iterate through array
    for(var x = 0; x < arr.length; x++) {
        //create counter variable
        var counter = 0;

        //check if value in array is greater than y 
        if(arr[x] > y) {

            //increment counter
            counter++;

        }
    }

    //print number of values greater than y 
    console.log("There are " + counter + " values in the array greater than " + y);
}
