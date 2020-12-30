/*
    Open a repl.it Javascript page and call it Algorithms Introduction Exercise 3.
    We have 3 items and we know the price for each. However, we can only buy the two least expensive items.
    Write an algorithm that takes in three user inputs and outputs the two smallest prices to the console.
*/

function precio(a,b,c){
	if (typeof(a)!=='number' || typeof(b)!=='number' || typeof(c)!=='number' || a<0 || b<0 || c<0){
		return "Error: Debe introducir números positivos";
	}
	if (a<c && b<c){
		return `${a} y ${b} son los precios más bajos.`
	}
	if (a<b && c<b){
		return `${a} y ${c} son los precios más bajos.`
	}
	if (b<a && c<a){
		return `${b} y ${c} son los precios más bajos.`
	}
}