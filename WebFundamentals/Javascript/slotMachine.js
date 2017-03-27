function randomChance(quarters) {

    var slotMachine = 0;

    while(quarters != 0) {

        slotMachine = (Math.floor((Math.random() * 100)) + 1);

        if(slotMachine == 1) {
            quarters += (Math.floor((Math.random() * 50)) + 51);
        }
        else if(quarters == 0) {
            return 0;
        }

    } 

    return quarters;

}