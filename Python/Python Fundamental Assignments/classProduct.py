class Product(object):
    #init method 
    def __init__(self, itemName, price, weight, brand, cost):
        self.itemName = itemName
        self.price = price
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "For Sale"

    def sell(self):
        self.status = "Sold"
        return self

    def addTax(self, tax):
        if self.tax != float:
            return "Invalid tax"
        else:
            self.finalPrice += self.price * tax
            return finalPrice

    def returnItem(self, reason):
        if reason != "In Box":
            self.status = reason
        else:
            self.status = "For Sale"
        return self

    def toString(self):
        print "Item Name:", self.itemName, "\n", "Price:", self.price, "\n", "Weight:", self.weight, "\n", "Brand:", self.brand, "\n", "Cost:", self.cost, "\n", "Status:", self.status
        return self