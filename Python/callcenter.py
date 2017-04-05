class CallCenter(object):
    #init method
    def __init__(self):
        self.calls = []
        self.queue = 0
    
    #method to add calls to the list and increment queue
    def addCall(self, newCall):
        self.calls.append(newCall)
        self.queue += 1
        return self

    def removeCall(self):
        #remove call from first index of list
        self.calls.pop(0)
        self.queue -= 1
        return self

    def info(self):
        for x in range(0,len(self.calls)):
            print "Caller Name:", self.calls[x].cName, "Phone Number:", self.calls[x].cNum
        print "Calls in queue:", self.queue
        return self
    
class Call(object):
    #import random class
    # import random
    # rand = random.randint(0,150)
    #init method
    def __init__(self, cName, cNum, time, reason):
        # self.id = rand
        self.cName = cName
        self.cNum = cNum
        self.time = time
        self.reason = reason

    def toString():
        print "ID:", self.id, "\n", "Name:", self.cName, "\n", "Number:", self.cNum, "\n", "Time:", self.time, "\n", "Reason:", self.reason
        return self
    

call1 = Call("John Doe", "804-646-4105", "22:30", "Bored")
call2 = Call("Jane Doe", "804-646-4050", "22:50", "Also bored")

center1 = CallCenter()

center1.addCall(call1).addCall(call2).info().removeCall().info()