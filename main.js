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
	}
}