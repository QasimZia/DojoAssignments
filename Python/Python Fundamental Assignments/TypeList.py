def typeList(x):
    #counter for types
    countInt = 0
    countStr = 0
    sum = 0
    newString = ''
    #for loop checking type of each element in list 
    for i in range(0,len(x)):
        #check individual element in list
        if type(x[i]) == str:
            newString = newString + " " + x[i]
            #increment counter of strings
            countStr += 1
        elif type(x[i]) == int or float:
            sum += x[i]
            #increment counter of ints
            countInt += 1
    
    #check if there is more than one type of element in list
    if countInt > 0 and countStr > 0:
        print "You have entered a mixed type of array"
        print "Sum:", sum
        print "String:", newString
    elif countInt > 0:
        print "You have entered an array of integer type"
        print sum
    else: 
        print "You have entered a string array"    
        print newString

typeList(['magical unicorns', 19, 'hello', 98.98, 'world'])
typeList([2,3,1,7,4,12])