def findChar(x, y):
    #for loop iterating through list
    newArr = []
    for i in range(0, len(x)):
        if y in x[i]:
            newArr.append(x[i])
    print newArr

findChar(['hello','world','my','name','is','Anna'], 'o')