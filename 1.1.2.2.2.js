/*
Construct a program that:

    Describes what the program does at the top of the function.
    Takes in a celsius temperature.
    Converts the temperature from celsius to fahrenheit. The code for the conversion is below:

    var fahrenheit = celsiusTemp * 9 / 5 + 32;

    Outputs the fahrenheit temperature to the console.
*/

function conversor(celsiusTemp){
    var fahrenheit = celsiusTemp * 9 / 5 + 32;
    console.log(celsiusTemp + "º Celsius son " + fahrenheit + "ª Fahrenheit")
}

conversor(20)