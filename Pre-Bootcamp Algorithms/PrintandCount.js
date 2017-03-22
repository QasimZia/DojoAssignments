var num = 512;

var count = 0;

while (num >= 512 && num < 4097) {
  if ((num % 5) === 0) {
    console.log(num);
    count++;
  }
  num++;
}

console.log("There are " + count + " integer multiples of 5 between 512 to 4096.");