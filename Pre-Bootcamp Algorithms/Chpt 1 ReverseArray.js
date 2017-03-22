function reverseArray(array) {
    //create new array to store reversed values
    var arrayReversed = [];
  
    console.log(array);
    
    //for loop to cycle through array
    for(var x = array.length-1; x != -1; x--) {

        //cycle through array at max index and push value to new array
        arrayReversed.push(array[x]);

    }

    //new for loop to modify original array with elements from reversed array
    for(var x = 0; x < array.length; x++) {
        
        //swap values at indexes
        array[x] = arrayReversed[x];

    }

    return array;
}


console.log(reverseArray([10,9,8,7,6,5,4]))