function swapString(arr) {

    //for loop
    for(var x = 0; x < arr.length; x++) {

        //check if values are negative
        if(arr[x] < 0) {
            arr[x] = "Dojo";
        }
    }
}