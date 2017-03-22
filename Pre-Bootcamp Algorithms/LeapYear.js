function checkLeapYear(yearX) {
  //check if year is divisible by 4 or 400
  if ((yearX % 4) === 0 || (yearX % 400) === 0) {
    //check if year is divisble by 100
    if ((yearX % 100) === 0) {
      console.log(yearX + " is not a leap year.");
    }
    //display result
    else {
      console.log(yearX + " is a leap year.")
    }
  }
}

//check leap years
checkLeapYear(1900);

checkLeapYear(1908);