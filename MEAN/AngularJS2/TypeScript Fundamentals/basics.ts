let myNum: number = 5;
var myString: string = "this is a string";
var arrayNumbers: number[] = [1, 2, 3, 4];
var myObj: object = {
    name: 'Bill',
}

var anything: any = 5;
var anyTwo: any = 'this is a string'

var arrayBool: boolean[] = [true, true, true, false];

var arrayAny: any[] = [true, 1, 'string', 2];

class SLNode {
    val: number;
    private _priv: number;

    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }

    doSomething() {
        this._priv = 10;
    }

}
let firstNode = new SLNode(2);
console.log(firstNode.val);

function myFunc(): void{
    console.log('Hello World');
    return;
}

function sendingErrors(message: string): never{
    throw new Error(message);
}
