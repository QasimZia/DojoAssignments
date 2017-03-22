function incrementSeconds(arr) {

    //for loop to cycle through array
    for(var x = 1; x < arr.length; x = x + 2) {
        arr[x] = arr[x] + 1;
    }

    console.log(arr);

    return arr;
}

console.log(incrementSeconds([1,2,3,4,5,6]));
