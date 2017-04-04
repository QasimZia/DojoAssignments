def multTable():
    #declare arrays for horizontal and vertical values up to 12
    vCol = [1,2,3,4,5,6,7,8,9,10,11,12]
    hCol = [1,2,3,4,5,6,7,8,9,10,11,12]
    #declare counter variables for while loop
    hCount = 0
    vCount = 0
    #print x without new line character
    print ("x"),
    #while loop for printing initial horizontal col
    while hCount != 12:
        #if on the last value print element at last index of array with new line character
        if hCount == 11:
            print (hCol[hCount])
            hCount += 1
        else:
            #else print last index of array without new line
            print (hCol[hCount]),
            hCount += 1
    while vCount != 12:
        print vCol[vCount], vCol[vCount] * 1, vCol[vCount] * 2, vCol[vCount] * 3, vCol[vCount] * 4, vCol[vCount] * 5, vCol[vCount] * 6, vCol[vCount] * 7, vCol[vCount] * 8, vCol[vCount] * 9, vCol[vCount] * 10, vCol[vCount] * 11, vCol[vCount] * 12
        vCount += 1
    # #print x, then horizontal values using for loop
    # for x in range(0,len(hCol)):
    #     if x == 0:
    #         print ("x" + " "),
    #     # for i in range(0,len(hCol)):
    #     while hCount != 12:
    #         if hCount == 11:
    #             print (hCol[hCount])
    #             hCount += 1
    #         else:
    #             print (hCol[hCount]),
    #             hCount += 1
        
            
multTable()