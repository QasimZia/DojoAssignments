function letterGrade(grade) {

    //variable to store letter grade
    var letterGrade;

    //if statements checking grade against letter grade value
    if(grade >= 90) {
        letterGrade = 'A';
    }
    else if(grade <= 89 || grade >= 80) {
        letterGrade = 'B';
    }
    else if(grade <= 79 || grade >= 70) {
        letterGrade = 'C';
    }
    else if(grade <= 69 || grade >= 60) {
        letterGrade = 'D';
    }
    else if(grade < 60) {
        letterGrade = 'F';
    }

    return letterGrade;
}