class Car(object):

    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = .15
        else:
            self.tax = .12
    
    def displayAll(self):
        return "Price:", self.price, "\n", "Speed:", self.speed, "\n", "Fuel:", self.fuel, "\n", "Mileage:", self.mileage, "\n", "Tax:", self.tax