function evenOdd(array) {

    //declare counter variables for even and evenOdd
    var odd = 0;
    var even = 0;

    //cycle through array using for loop
    for (var x = 0; x < array.length; x++) {

        if((array[x] % 2) != 0) {

            //check next value
            if((array[x+1] % 2) != 0) {

                //if true check next value
                if((array[x+2] % 2) != 0) {

                    //print 
                    console.log("That's odd!");
                }
            } 

        }
      
        if((array[x] % 2) == 0) {

            //check next value
            if((array[x+1] % 2) == 0) {

                //if true check next value
                if((array[x+2] % 2) == 0) {

                    //print 
                    console.log("Even more so!");
                }
            } 

        }
      
    }

}

var array = [1,1,1,2,4,3,4,6,8];

evenOdd(array);