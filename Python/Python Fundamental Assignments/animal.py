class Animal(object):
    #init method 
    def __init__(self, name):
        #set initial attributes
        self.name = name
        self.health = 100
    
    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self
    
    def displayHealth(self):
        print "Health:", self.health, "\n", "Name:", self.name
        return self
    
class Dog(Animal):
    #init method
    def __init__(self,name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return self
        
dog = Dog("Bob")
dog.displayHealth()

class Dragon(Animal):
    #init method
    def __init__(self,name):
        super(Dragon, self).__init__(name)
        self.health = 170
        return self
    
    def fly(self):
        self.health -= 10
        return self

    def displayHealth(self):
        print "This is a dragon"
        super(Dragon, self).displayHealth()

        