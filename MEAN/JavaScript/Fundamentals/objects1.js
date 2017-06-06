class VehicleConstructor {
    constructor(name, wheels, passengers, speed) {
        this.speed = speed;
        this.name = name;
        this.wheels = wheels;
        this.passengers = passengers;
        this._distanceTraveled = 0;

        this.getDistanceTraveled = function() {
            return this._distanceTraveled;
        }
    }

    makeNoise() {
        console.log('vroom');
        return this;
    }

    updateDistanceTraveled() {
        this._distanceTraveled += this.speed;
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

bus._distanceTraveled = 15;

console.log(bus.checkDistanceTraveled());

// console.log(bus.speed);