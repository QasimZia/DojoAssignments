function minMaxAvg(arr) {
    //create variables to store min max and avg 
    var min = arr[0];
    var max = arr[0];
    var avg = 0;
    var sum = 0;

    //for loop
    for(var x = 0; x < arr.length; x++) {

        //check values for max
        if(arr[x] > max) {
            max = arr[x];
        }

        //check values for min
        if(arr[x] < min) {
            min = arr[x];
        }
        
        //sum values for avg
        sum += arr[x];

    }

    //calculate avg
    avg = sum / arr.length;

    //output result
    console.log("The max value is " + max + ". The avg is " + avg + ". The min is " + min);
}