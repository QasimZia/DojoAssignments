var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];

for(var y in x){
    console.log(x[y]);
}

x.push(100);

x.push(['hello', 'world', 'JavaScript is Fun']);

sum = 0;
for(var x = 0; x <= 500; x++) {
    sum += x;
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0];

var min = arr[0];

for(var x in arr){
    if(arr[x] < min) {
        min = arr[x];
    }
}

console.log(min);