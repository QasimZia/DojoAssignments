
#find and replace
str = "It's thanksgiving day. It's my birthday,too!"

str.find('day')
strA = str.replace('day', 'month')

#min and max
def minMax(x):
    print min(x)
    print max(x)

def firstAndLast(x):
    print x[0]
    print x[len(x)-1]
    y = []
    y.append(x[0])
    y.append(x[len(x)-1])

#new list
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()

a = x[5:]
b = x[:6]

a.insert(0, b)

print b