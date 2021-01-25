/*
There are 12 people on an island. One person weighs less than the others, 11 people weigh exactly the same. There is a seesaw that can be used to weigh the people.

    Design an algorithm to find the person who weighs less.
    The seesaw can only be used max 4 times; what does your algorithm look like?
    The seesaw can only be used max 3 times; what does your algorithm look like?

    This is a Layton!! :D
*/

var people = [80, 80, 80, 72, 80, 80, 80, 80, 80, 80, 80, 80];

var mid = people.length / 2;
var total = people.length;
var left;
var right;
var groupWin;
var peopleLeft = [];
var peopleRight = [];
var end = [];

for (i2 = 1; i2 < 4; i2++) {
    console.log("Balanza " + i2 + ":");

    mid = people.length / 2;
    total = people.length;

    left = 0;
    right = 0;
    peopleLeft = [];
    peopleRight = [];

    for (let i = 0; i < 3; i++) {
        end.push(people[i])
    }

    var min = 0;

    for (i = 0; i < total; i++) {
        if (i < mid) {
            left = left + people[i];
            peopleLeft.push(people[i]);
        }
        else {
            right = right + people[i];
            peopleRight.push(people[i]);
        }
    }

    if (left < right) {
        groupWin = "izquierda";
        people = peopleLeft;
    }
    else {
        groupWin = "derecha";
        people = peopleRight;
    }

    if (i2 === 1) {
        console.log("Empezamos con " + total + ", ponemos a " + mid + " en un lado y a " + mid + " en otro.");
        console.log("Los de la izquierda pesan " + left + "kg y los de la derecha " + right + "kg, por lo que seguimos al grupo de la " + groupWin + ".");
        console.log("");
    } else if (i2 === 2) {
        console.log("Ahora quedan " + total + ", ponemos a " + mid + " en un lado y a " + mid + " en otro.");
        console.log("Los de la izquierda pesan " + left + "kg y los de la derecha " + right + "kg, por lo que seguimos al grupo de la " + groupWin + ".");
        console.log("");
    } else {
        console.log("Ahora quedan " + total + ", ponemos a una persona a un lado de la balanza y a otra al otro lado, dejando a uno fuera.");
        console.log("El de la izquierda pesa " + end[0] + "kg y el de la derecha " + end[1] + "kg, mientras que el que ha quedado fuera es el que pesa " + end[2] + "kg (aunque no sepamos este dato).");

        if (end[0] < end[1]) {
            min = end[0];
        }
        else if (end[1] < end[0]) {
            min = end[1];
        }
        else {
            min = end[2];
        }

        console.log("El isleño que pesa menos es el que pesa " + min + "kg.");
    }
}