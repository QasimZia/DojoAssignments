class Bike(object):
    #init method taking price, max speed and miles as parameters/attributes for the object
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "The price is:", self.price
        print "Max speed:", self.max_speed
        print "Total miles:", self.miles
        return self

    def ride(self):
        print "Riding"
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing"
        if self.miles == 0:
            self.miles = 0
        else:
            self.miles -= 5
        return self

bike = Bike(200,"25mph")

bike.ride().ride().ride().reverse().displayInfo()

print "End first instance"
print ""

bike2 = Bike(250,"30mph")

bike2.ride().ride().reverse().reverse().displayInfo()

print "End second"
print ""

bike3 = Bike(300,"25mph")

bike3.reverse().reverse().reverse().displayInfo()