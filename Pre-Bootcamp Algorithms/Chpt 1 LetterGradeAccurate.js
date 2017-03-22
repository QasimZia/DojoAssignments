function letterGrade(grade) {

    //variable to store letter grade
    var letterGrade;

    //if statements checking grade against letter grade value
    if(grade >= 90) {

        letterGrade = 'A';
        
    }
    else if(grade <= 89 || grade >= 80) {
        
        if(grade <= 89 || grade >= 87) {
            letterGrade = 'B+';
        }
        else if(grade <= 82 || grade >= 80) {
            letterGrade = 'B-';
        }
        else{
            letterGrade = 'B';
        }

    }
    else if(grade <= 79 || grade >= 70) {

        if(grade <= 79 || grade >= 77) {
            letterGrade = 'C+';
        }
        else if(grade <= 72 || grade >= 70) {
            letterGrade = 'C-';
        }
        letterGrade = 'C';
    }
    else if(grade <= 69 || grade >= 60) {

        if(grade <= 69 || grade >= 67) {
            letterGrade = 'D+';
        }
        if(grade <= 62 || grade >= 60) {
            letterGrade = 'D-';
        }
        letterGrade = 'D';
    }
    else if(grade < 60) {
        letterGrade = 'F';
    }

    return letterGrade;
}