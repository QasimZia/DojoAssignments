function checkBirthday(x, y) {
  //set birthday month and day
  var birthdayMonth = 7;
  var birthDay = 6;
  
  //check if x is equal to birthday month or day
  if (x === birthdayMonth || x === birthDay) {
    //check if y is equal to birthday
    if (y === birthdayMonth || y === birthDay) {
      console.log("How did you know?");
    }
  }
  else {
    console.log("Just another day....");
  }
}

//call function 
checkBirthday(5, 8);
//call function
checkBirthday(6, 7);