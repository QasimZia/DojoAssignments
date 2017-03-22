function reduceArray(arr, x) {
    //create temp array
    var arraytemp = [];
  
    console.log(arr);
  

    //for loop to iterate through array
    for(var y = 0; y < x; y++) {
      
      //pop x number of values and push to new array
      arraytemp.push(arr.pop());
      
    }

    //for loop to fill array with values from new array
    for(var a = 0; a < x; a++) {

      arr[a] = arraytemp.pop();

    }

    return arr;

}

console.log(reduceArray([2,4,6,8,10], 3));