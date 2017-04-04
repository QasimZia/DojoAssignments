def scoresAndGrades():
    import random

    print "Scores and Grades"
    for x in range(0,10):
        random_num = random.randint(0,100)
        if random_num >= 90:
            print "Score:", random_num, ";", " Your grade is an A"
        elif random_num <= 89 and random_num >= 80:
            print "Score:", random_num, ";", " Your grade is a B"
        elif random_num <= 79 and random_num >= 70:
            print "Score:", random_num, ";", " Your grade is a C"
        elif random_num <= 69 and random_num >= 60:
            print "Score:", random_num, ";", " Your grade is a D"
        else:
            print "Score:", random_num, ";", " Your grade is an F"
    print "End of program."

scoresAndGrades()