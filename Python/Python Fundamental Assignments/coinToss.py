def coinToss():
    import random
    #counter variables for each coin value
    heads = 0
    tails = 0
    for x in range(1,5001):
        ran = random.randint(0,1)
        if ran == 1:
            heads += 1
            print "Attempt #", x, "It's heads! .. Got", heads, " heads and", tails, "tails so far."
        elif ran == 0:
            tails += 1
            print "Attempt #", x, "It's tails! .. Got", heads, " heads and", tails, "tails so far."

coinToss()