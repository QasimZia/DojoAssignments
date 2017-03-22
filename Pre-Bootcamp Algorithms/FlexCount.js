function flexCount(lowNum, highNum, mult) {
  for (var num = highNum; num >= lowNum; num--) {
    if ((num % mult) === 0) {
      console.log(num);
    }
  }
}

flexCount(2,9,3);