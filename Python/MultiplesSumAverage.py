#for loop to print all odd numbers from 1-1000
for x in range(0,1001):
    #check if value is odd or even
    if x % 2 != 0:
        #if x is odd print x
        print x

#for loop printing multiples of 5
for x in range(0,1000001):
    #check if value is a multiple of 5
    if x % 5 == 5:
        print x

#sum list
#declare list
a = [1,2,5,10,255,3]
#declare var to hold sum
sum = 0
for x in range(0,len(x)):
    sum += a[x]

#get avg
avg = sum / len(a)