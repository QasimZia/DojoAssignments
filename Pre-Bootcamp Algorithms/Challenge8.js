function squareArray(arr) {

    //for loop to iterate through squareArray
    for(var x = 0; x < arr.length; x++) {

        //square each value in array 
        arr[x] = (arr[x] * arr[x]);
    }

    //return array
    return arr;
}