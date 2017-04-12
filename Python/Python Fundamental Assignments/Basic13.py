#print 1-255
for count in range(1,256):
    print count

#print odds 1-255
for x in range(1,256):
    if x % 2 != 0:
        print x

#print ints and sum 0-255
for x in range(0,256):
    print x
    sum += x
    print sum

#iterate and print array
arr = [1,2,3,4,5,6]
for x in range(0,len(arr)):
    print arr[x]

#find and print max
arr = [1,2,3,4,5,6]
max = 0;
for x in range(0,len(arr)):
    if(arr[x] > max):
        max = arr[x]

print max

#get and print average
def printAvg(arr):
    avg = 0
    sum = 0

    for x in range(0,len(arr)):
        sum += arr[x]
    
    avg = sum / len(arr)

    print avg