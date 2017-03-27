function daysUntilBirthday() {

    for(x = 60; x >= 0; x--) {

        if(x > 30) {
            console.log(x + "days until my birthday. Such a long time.. :("));
        }
        else if(x < 30) {
            console.log(x + "DAYS UNTIL MY BIRTHDAY!!");
        }
        else if(x == 0) {
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
            console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");     
            console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
        }
    }
}