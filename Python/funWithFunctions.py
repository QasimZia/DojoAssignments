def oddEven():
    for x in range(0,2001):
        if x % 2 == 0:
            print "Number is ",
            print x,
            print "this is an even number."
        if x % 2 != 0:
            print "Number is ",
            print x,
            print "this is an odd number."

def multiply(a, b):
    i = []
    #iterate through list and multiply each value by b
    for x in range(0,len(a)):
        i.append(a[x] * b)
    return i
print multiply([2,4,5], 3)

def layeredMultiples(arr):
    #create new blank array
    newArr = []
    #for loop iterating through array
    for x in range(0,len(arr)):
        #append new list to new array index for each individual arr element
        newArr.append([])
        for y in range(0, arr[x]):
            #append 1 into 2nd dimension of array equal to value of element
            newArr[x].append(1)
        
    return newArr

print layeredMultiples(multiply([2,4,5],3))