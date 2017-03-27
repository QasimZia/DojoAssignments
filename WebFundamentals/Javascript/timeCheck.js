function time (hour, minute, period) {

    if (hour < 9 && hour is > 6) {
        if (minute < 59 && minute > 30) {
            if (period == "AM") {
                console.log("It's almost 9 in the morning.");
            }
        }
    }

        if (hour < 12 && hour is > 9) {
            if (minute < 59 && minute > 30) {
                if (period == "AM") {
                    console.log("It's almost noon.");
                }
            }
        }

    if (hour < 3 && hour is > 12) {
        if (minute < 59 && minute > 30) {
            if (period == "PM") {
                console.log("It's almost 3 in the afternoon.");
            }
        }
    }

    if (hour < 6 && hour > 9) {
        if (minute < 59 && minute > 30) {
            if (period == "PM") {
                console.log("It's almost 6 in the evening.");
            }
        }
    }

    if (hour < 9 && hour is > 6) {
        if (minute < 59 && minute > 30) {
            if (period == "PM") {
                console.log("It's almost 9 in the evening.");
            }
        }
    }
}