/*
Open up a blank repl.it set to Javascript. Copy the code below into your workspace:

    var arr = ["This", "is", "a", "sentence."];
    function printOutString() {
      // your code here
    }

    printOutString();

    Complete the function to print out the string This is a sentence.
*/

var arr = ["This", "is", "a", "sentence."];
function printOutString() {
  let string = "";
  for(i=0; i<arr.length; i++){
      string = string + arr[i] + " ";
  }
  console.log(string)
}

printOutString();