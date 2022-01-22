function calc(c,  a, b){
	if ( typeof a !== 'number' || typeof b !== 'number'){
		return 'Error';
	} else if (c == '+') {
		return a + b;
	}
	else if (c == '-') {
		return a - b;
	}
	else if (c == '/') {
		return a / b;
	}
	else if (c == '*') {
		return a * b;
	}
	else if (c == '%') {
		return a % b;
	}
	else if (c == '**') { 
		return a ** b;
	}else if (c == '') { 
		return 'unknown operation';
 }
}
console.log(calc('+', 2, 2));
console.log(calc('-', 2, 2));
console.log(calc('/', 2, 2));
console.log(calc('*', 2, 2));
console.log(calc('%', 2, 2));
console.log(calc('', 2, 2));
console.log(calc('5', '2', '2'));
console.log(calc('+', 's', 'd'));