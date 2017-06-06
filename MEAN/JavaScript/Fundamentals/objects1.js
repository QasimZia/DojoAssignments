class VehicleConstructor {
    
    constructor(name, wheels, passengers, speed) {
        this.speed = speed;
        this.name = name;
        this.wheels = wheels;
        this.passengers = passengers;
        var distanceTraveled = 0;

        this.getDistanceTraveled = function() {
            return this.distanceTraveled;
        }
    }

    makeNoise() {
        console.log('vroom');
        return this;
    }

    updateDistanceTraveled() {
        this.distanceTraveled += this.speed;
        return this;
    }

    move() {
        this.updateDistanceTraveled(); 
        this.makeNoise();
    }

    checkDistanceTraveled() {
        return this._distanceTraveled;
    }
}

var bike = new VehicleConstructor('bike', 2, 1, 2);

bike.makeNoise = function() {
    console.log('ring ring');
    return this;
}

bike.makeNoise();


var sedan = new VehicleConstructor('sedan', 4, 2, 5);

sedan.makeNoise = function() {
    console.log('Honk Honk!');
    return this;    
}

sedan.makeNoise();

var bus = new VehicleConstructor('bus', 6, 10, 15);

bus.addPassengers = function(p) {
    this.passengers += p;
    return this;    
}

bus.addPassengers(10).makeNoise();

console.log(bus.passengers);

console.log(bus.checkDistanceTraveled());

bus.distanceTraveled = 15;

console.log(bus.getDistanceTraveled());

// console.log(bus.speed);