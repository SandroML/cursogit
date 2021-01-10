/* You are trying to get from point B to point C. You can only
move one block at a time. You can move up, down, left right. 
Write an algorithm. */

var b = [8,2]
var c = [4,8]

console.log("B: X=" + b[0] + " Y=" + b[1])
console.log("C: X=" + c[0] + " Y=" + c[1])
console.log("\nProceso de B:")

while (b[0] !== c[0]){
    if (b[0] < c[0]){
        b[0]++;
    }
    else{
        b[0]--;
    }
    console.log("B: X=" + b[0] + " Y=" + b[1])
}
while (b[1] !== c[1]){
    if (b[1] < c[1]){
        b[1]++;
    }
    else{
        b[1]--;
    }
    console.log("B: X=" + b[0] + " Y=" + b[1])
}