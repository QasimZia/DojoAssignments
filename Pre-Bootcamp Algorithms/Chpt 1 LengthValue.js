function arrayLengthValue(num1, num2) {
    //declare blank array
    var array = [];

    //for loop to fill array
    for(var x = 0; x < num1; x++) {

        array.push(num2);
        
    }

    //check if num1 and num2 values are equal, print jinx if true
    if (num1 === num2) {
        console.log("Jinx!");
    }

    return array;
}

//call function
var array = arrayLengthValue(3,3);

console.log(array);