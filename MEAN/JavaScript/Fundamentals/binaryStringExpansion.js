function binaryStringExpansion(str, substr, arr){
    substr = substr || "";
    arr = arr || [];
    if(!str[substr.length]){
        arr.push(substr);
        return arr;
    } else {
        if(str[substr.length != "?"]){
            binaryStringExpansion(str, substr + str[substr.length], arr);
        } else {
            binaryStringExpansion(str, substr + "0", arr);
            binaryStringExpansion(str, substr + "1", arr);
        }
    }
    return arr;
}