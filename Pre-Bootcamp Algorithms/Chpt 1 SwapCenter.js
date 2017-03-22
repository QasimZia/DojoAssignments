function swapCenter(array) {

    //for loop to cycle through array, increment by 2 to swap every other element
    for(var x = 0; x < ((array.length - 1) / 2); x = x + 2) {
        //create temp variable to store element to swap
        var temp;

        //assign value to temp variable
        temp = array[x];
      

        //create for loop to cycle through last index of array and count down
        for(var y = array.length - 1; y >= ((array.length - 1) / 2); y = y - 2) {
          
          
          //swap last index with temp value
          array[x] = array[y];
          
          //swap first index with array value
          array[y] = temp;
          
          //manually increment x index of array
          x = x + 2; 
          
          //assign new value to temp var
          temp = array[x];
          

        }
      
      
      
    }
  
  return array;
}

console.log(swapCenter([1,2,3,4,5,6]));