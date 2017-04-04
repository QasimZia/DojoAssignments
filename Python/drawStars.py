def drawStars(arr):
    for x in range(0,len(arr)):
        count = 0
        line = ""
        if type(arr[x]) == str:
             while count < len(arr[x]):
                line += arr[x][0]
                count += 1
        else:
            while count < arr[x]:
                line += "*"
                count += 1
        print line

drawStars([20,4,5,6,"Michael"])