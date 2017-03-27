function forAFewBillion() {
    var sum = 0;
    var penny = .01;
    
    for(var x = 0; x <= 30; x++) {
        sum += (penny);

        penny = penny * 2;
    }

    console.log(sum);
}

forAFewBillion();