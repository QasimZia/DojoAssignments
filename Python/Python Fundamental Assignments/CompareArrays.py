def compareList(x,y):
    #fast fail checking if list contains same amount of elements
    if len(x) != len(y):
        return "Not the same"
    #for loop iterating through elements of list 
    for i in range(0, len(x)):
        if (x[i] != y[i]):
            return "Not the same"
    return "Same"

print compareList([1,2,5,6,5], [1,2,5,6,5])