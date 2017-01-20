// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a 
// positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. 
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.

// Note: n, p will always be given as strictly positive integers.

var first = process.argv[2];
var second = process.argv[3];

function digPow(n,p){

	var originalN = parseInt(n);
	n = n.toString();
	var list = n.split('');
	var number;
	var exponents = [];
	p = parseInt(p);

	for(var i=0; i<list.length; i++){

		list[i] = parseInt(list[i]);

		if(i==0){
			exponents.push(p);
		}
		else{
			p = (p + 1);
			exponents.push(p);
		}
	}

	for(var j=0; j<list.length; j++){

		if(j==0){
			number = ( Math.pow(list[j], exponents[j]) );
		}
		else{
			number = ( number + (Math.pow(list[j], exponents[j])) );
		}
	}
	
	var k = (number / originalN);

	if(number%originalN==0){
		console.log('k equals: ' + k);
	}
	else{
		console.log('k was not an integer');
	}
}


digPow(first, second);