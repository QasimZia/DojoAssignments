function rangePrint(start, stop, skip) {
    if(skip == null) {
        skip = 1;
    }
    else if(stop == null && skip == null) {
        skip = 1;
        stop = start;
        start = 0;
    }

    for(x = start; x < stop; x = x + skip) {
        console.log(x);
    }
}

rangePrint(2,10,2);