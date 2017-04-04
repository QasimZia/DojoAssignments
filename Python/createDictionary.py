def createDictionary(person):

    # print "My name is " + person["name"]
    # print "My age is " + person["age"]
    # print "My country of birth is " + person["birth_place"]
    # print "My preferred language is " + person["language"]

    # for x in range(0,len(person)):
    #     for key,data in person[x].iteritems():
    #         print data,
    #     print ""
    for key,data in users.items():
        count = 1
        print key
        for value in data:
            print count, "-", value["first_name"].upper(), value["last_name"].upper(), "-" ,len(value["first_name"]) + len(value["last_name"])
            count += 1
        


# person = {}
# person["name"] = "Qasim"
# person["age"] = "24"
# person["birth_place"] = "Guatemala"
# person["language"] = "Eng"

# createDictionary(person)

users = {
    'Students': [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ],
    'Instructors': [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'Martin', 'last_name' : 'Puryear'}
    ]
}

createDictionary(users)

