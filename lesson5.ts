function printNumbers(limit: number): void {
    for (let i: number = 1; i <= limit; i++) {
        console.log(i);
    }
}

printNumbers(5);
printNumbers(3);

function calculateSum (limit2:number):number{
let total:number = 0;
    for(let i:number = 1;  i <= limit2; i++){
        total=total+i;
    }
    return total;
}

console.log(calculateSum(5));
console.log(calculateSum(10));

// part 2

function countDown (start:number):void{
    let down:number = 1;

    while(start>=down){
        console.log(start);
        

        start--;
    }
    console.log("Go!")
}

countDown(5);
countDown(3);

// part3

function printNames (names:string[]):void{
    for (const name of names) {
        console.log(name)
    }
}

printNames(["Samad", "Davido", "Halimah"]);
printNames(["Ada", "John"]);

//part4
function findHighestScore(scores: number[]): number {
    if (scores.length === 0) {
        return 0;
    }

    let highest: number = scores[0] ?? 0;

    for (const score of scores) {
        if (score > highest) {
            highest = score;
        }
    }

    return highest;
}

console.log(findHighestScore([70, 85, 90, 65]));
console.log(findHighestScore([45, 99, 72]));
console.log(findHighestScore([]));