/* Construct a program that takes in your name and saves it
to a variable. At the top of your code, write a comment that
has your name and today's date. Print out Hello my name is with
your name to the console. */

function saludo(name){
    var inicio = Date.now();
    var f = new Date();
    console.log(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    console.log("Hello my name is " + name)
}

saludo("Sandro")