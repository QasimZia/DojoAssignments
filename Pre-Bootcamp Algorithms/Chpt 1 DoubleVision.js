function doubleArray (array) {
    //declare new blank array
    var arrayDouble = [];

    //cycle through passed array
    for(var x = 0; x < array.length; x++) {

        //double original value in array and pass to new array
        arrayDouble.push(array[x] * 2);
    }

    console.log(arrayDouble);
}

var array = [1,2,3];

//call function
doubleArray(array);