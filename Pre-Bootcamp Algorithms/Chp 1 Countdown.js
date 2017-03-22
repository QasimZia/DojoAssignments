function countDownArray(x) {
  
  //declare blank array
  var arr = [];
  
  //countdown from x and push value to array
  for (var y = x; y >= 0; y--) {
    arr.push(y);
  }
  
  
  //output result
  console.log(arr);
  
}

countDownArray(10);