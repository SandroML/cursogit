/*
    Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
    Write an algorithm to find the largest among 5 different numbers entered by the user.
    Print out the largest number to the console.
*/

function mayor(array) {
	var x = 0;
	for (i = 0; array.length > i; i++) {
		if (x < array[i]) {
			x = array[i];
		}
	}
    //return x;
    console.log(x);
}

mayor ([8, 9, 6]);