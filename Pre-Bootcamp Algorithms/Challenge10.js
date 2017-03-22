function zeroNegative(arr) {

    //for loop
    for(var x = 0; x < arr.length; x++) {

        //check if values are neg 
        if(arr[x] < 0) {

            //set values equal to zero if negative 
            arr[x] = 0;

        }
    }

    //return array
    return arr;
}