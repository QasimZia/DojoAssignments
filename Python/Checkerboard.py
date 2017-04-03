def Checkerboard():
    #for loop iterating 5 times to print values
    for x in range(0,4):
        print ("*" + " ") * 4
        y = x
        while y <= x:
        # for y in range(0,x):
            print (" " + "*") * 4
            y += 1

Checkerboard()