function iqIncrease () {

    //var to represent starting IQ
    var iq = 101;

    //for loop to increase Bogdan's IQ
    for(var x = .01; x <= .98; x = x + .01) {

        //add x into iq per cycle
        iq += x;

    }

    //log iq at end
    console.log(iq);
}

iqIncrease();