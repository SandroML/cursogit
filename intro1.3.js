/*
    Step 1

Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).

    Step 2

Find a partner.
Exchange your code.
Read your partner's code and suggest improvements on how you would refactor their code.
Test your partner's code for correctness (does it give the correct output), if it does not give the correct output, work together to fix the code.
/*/

var number1 = [3, 5, 7, 17, 6];
var number2 = [5, 2, 10, 6, 8];

console.log("Primer grupo: " + number1);
console.log("Segundo grupo: " + number2);

number1.sort((a,b)=>b-a);
number2.sort((a,b)=>b-a);

console.log("En el primer grupo el mayor es " + number1[0] + ", mientras que en el segundo es " + number2[0]);