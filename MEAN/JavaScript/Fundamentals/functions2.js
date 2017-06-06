/* -----------------------------------------------------------  */

var sumRange = function(x, y) {
    sum = 0;
    for(var i = x; i <= y; i++) {
        sum += i;
    }

    console.log(sum);
}

/* -----------------------------------------------------------  */

var findMin = function(arr) {
    //check if arr exists
    if(arr.length < 1) {
        return false;
    }

    min = arr[0];
    for(var x in arr) {
        if(arr[x] < min) {
            min = arr[x];
        }

        return min;
    }
}

/* -----------------------------------------------------------  */

var avgArr = function(arr) {
    sum = 0;
    for(var x in arr) {
        sum += arr[x];
    }

    var avg = sum / arr.length

    return avg;
}

/* -----------------------------------------------------------  */

var mathFunctions = {

    rangeSum: function(x, y) {
        sum = 0;
        for(var i = x; i <= y; i++) {
            sum += i;
        }

        console.log(sum);
    },

    minFind: function(arr) {
        if(arr.length < 1) {
            return false;
        }

        min = arr[0];
        for(var x in arr) {
            if(arr[x] < min) {
                min = arr[x];
            }

            return min;
        }        
    },

    arrAvg: function(arr) {
        sum = 0;
        for(var x in arr) {
            sum += arr[x];
        }

        var avg = sum / arr.length

        return avg;
    }
}

/* -----------------------------------------------------------  */

var person = {
    name: 'Q',
    distance_travelled: 0,
    say_name: function() {
        alert(this.name);
        return this;
    },
    say_something: function(x) {
        alert(this.name + 'says ' + x);
        return this;
    },
    walk: function() {
        alert(this.name + ' is walking');
        this.distance_travelled += 3;
        return this;
    },
    run: function() {
        alert(this.name + ' is running');
        this.distance_travelled += 10;
        return this;        
    },
    crawl: function() {
        alert(this.name + ' is crawling');
        this.distance_travelled += 1;
        return this;
    }
}

person.say_name();

/* -----------------------------------------------------------  */

function PersonConstructor(name) {

    var person = {
        name: name,
        distance_travelled: 0,
        say_name: function() {
            alert(this.name);
            return this;
        },
        say_something: function(x) {
            alert(this.name + 'says ' + x);
            return this;
        },
        walk: function() {
            alert(this.name + ' is walking');
            this.distance_travelled += 3;
            return this;
        },
        run: function() {
            alert(this.name + ' is running');
            this.distance_travelled += 10;
            return this;        
        },
        crawl: function() {
            alert(this.name + ' is crawling');
            this.distance_travelled += 1;
            return this;
        }
    }

    return person;

}

/* -----------------------------------------------------------  */

function NinjaConstructor(name, cohort) {
    var ninja = {
        name: name,
        cohort: cohort,
        beltLevel: 'Yellow',
        levelUp: function(belt) {
            this.beltLevel = belt;
        }
    }

    return ninja;
}