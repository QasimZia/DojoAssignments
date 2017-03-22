var sum = 0;

for (var num = -300000; num <= 300000; num++) {
    if ((num % 3) === 0) {
        sum += num;
    }

}

console.log(sum);