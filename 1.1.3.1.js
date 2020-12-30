/*
    Open a repl.it Javascript page and call it Algorithms Introduction Exercise 1.
    Write a program where a user enters the number of tasks they have completed. The program returns one of the following labels to the console:

**Failed**
**Insufficient**
**Good**
**Excellent**
**Error**

based on the conditions:

    Failed if they scored 6 or less
    Insufficient if they scored > 6 but less than 9 (9 included)
    Good if they scored > 9 but less than 14 (14 included)
    Excellent if they scored 15
    Error if participants enter a negative number or a number outside the range supported (outside 0 - 15)
*/

function scored(value){
	if (value<0 || value>15){
		return "**Error**"
	}
	if (value<=6){
		return "**Failed**"
	}
	else if (value<=9){
		return "**Insufficient**"
	}
	else if (value<=14){
		return "**Good**"
	}
	else{
		return "**Excellent**"
	}
}
