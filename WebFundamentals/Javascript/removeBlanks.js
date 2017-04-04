//remove blanks from array
function removeBlanks(str) {
    var newArr = [];
    for(var i = 0; i < str.length; i++) {
        if(str[i] != " ") {
            newArr[newArr.length] = str[i];
        }
    }
    return newArr.join("");
}