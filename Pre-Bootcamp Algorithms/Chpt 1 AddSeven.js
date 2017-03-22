function addSeven(array) {
    //declare new array to fill with values
    var arr2 = [];

    //for loop to cycle through array except for first element
    for(var x = 1; x < array.length; x++) {

        //add seven to each array element except first and push to arr2
        arr2.push(array[x] + 7);

    }

    return arr2;
}

console.log(addSeven([1,2,4,6,3]));
