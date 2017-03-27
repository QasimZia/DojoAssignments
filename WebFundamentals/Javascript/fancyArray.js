function fancyArray(arr, symbol) {

    for(x = 0; x < arr.length; x++) {
        console.log(x + " " + symbol + " " + arr[x]);
    }

}


fancyArray(["jack","jill","will","bill"], "->");