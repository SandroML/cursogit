/* Given a list of positive numbers [3, 5, 7, 1, 6], return the
largest number in the list. */

var number = [3, 5, 7, 1, 6]

console.log ("Los números recibidos son: " + number)

number.sort((a,b)=>b-a)

console.log ("El número más grande de la lista es: " + number[0])