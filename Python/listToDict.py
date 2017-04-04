def listToDict(a,b):
    newDict = {}
    if len(a) >= len(b):
        newDict = zip(a,b)
    else:
        newDict = zip(b,a)
    return newDict

print listToDict(["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"], ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"])
