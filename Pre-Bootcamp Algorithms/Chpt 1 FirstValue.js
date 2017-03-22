function valueCheckArray(array) {
    //check values against array length
    if (array[0] > array.length) {
        console.log("Too big!");
    }
    else if (array[0] < array.length) {
        console.log("Too small!");
    }
    else {
        console.log("Just right!");
    }

}