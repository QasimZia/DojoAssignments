function finalCount (param1, param2, param3, param4) {

    while (param2 <= param3) {
    
        if ((param2 % param1) === 0) {
            var multiple = param2;

            if (multiple === param4) {
              param2++;
              continue;
            }
          
            else {
              console.log(param2);
            }

        }
      
        param2++;

    }
}

finalCount(3, 5, 17, 9);