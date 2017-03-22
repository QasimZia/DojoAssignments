function shiftArray(arr) {

    //for loop to iterate through array 
    for(var x = 0; x < arr.length; x++) {

        //cycle through array
        if(x === 0) {
            arr[x] = arr[x+1];
        }
        else if (x === arr.length - 1) {
            arr[x] = 0;
        }
        else {
            arr[x] = arr[x+1];
        }
    }
}