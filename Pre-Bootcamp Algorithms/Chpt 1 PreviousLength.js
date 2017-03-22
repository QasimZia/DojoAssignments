var arr = ["StringA", "StringBB", "StringCCC"];

function previousLength(arr) {
  
  //for loop cycle through array
  for(var x = 0; x < arr.length; x++) {
    
    //replace string in array with length of previous string unless there is no prior index
    if(x === 0) {
      continue;
    }
    else {
      arr[x] = arr[x].length;
    }

    console.log(arr[x]);
  }
  
  return arr;
}

previousLength(arr);

console.log(arr);