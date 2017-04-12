def filterByType(x):
    if type(x) == int:
        if x >= 100:
            print "That's a big number!"
        else:
            print "That's a small number!"
    if type(x) == str:
        if len(x) >= 50:
            print "Long sentence"
        else:
            print "Short sentence"
    elif type(x) == list:
        if len(x) >= 10:
            print "Big List!"
        else:
            print "Short list."
