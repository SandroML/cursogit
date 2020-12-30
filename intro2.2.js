/*
Write a function that:

    Takes in an array of numbers.
    Doubles the value of each number in the array.
    Prints out the new updated array.

Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

number = [1, 2, 4, 5, 6, 7, 8, 9]

console.log(Array.from(number, x => x * 2));
