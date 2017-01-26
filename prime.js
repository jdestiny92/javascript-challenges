// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. 
// From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes 
// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer >= 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 2, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 2 and 50 
// with a 2-gap. So this function should return the first pair of two prime numbers spaced with a gap of g between 
// the limits m, n if these numbers exist otherwise nil or null or None or Nothing (depending on the language). 
// In C++ return in such a case {0, 0}.

// Examples:

// gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

// gap(2, 5, 5) --> nil or in C++ {0, 0}

// gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

var start = process.argv[2];
var start2 = process.argv[3];
var start3 = process.argv[4];

function primeFinder(x,y,z){
	var difference = x;
	x = parseInt(x);
	y = parseInt(y);
	z = parseInt(z);
	var filteredList = [];
	var list = [];
	var answer = [];

	for(var i=y; i<=z; i++){
		list.push(i);
	}

	//console.log('original list = ' + list);

	function filter(){
		for(var j=0; j<list.length; j++){
			var number = list[j];
			
			for(var k = 2; k < number; k++) {
		        if(number % k === 0) {
		      		break;
		        }
		        if(k===(number-1)){
		       		filteredList.push(number);
		        }
		       
		    }
		}
	}

	filter();

	//console.log('filtered list = ' + filteredList);

	function calculate(){

		var absolute = Math.abs(filteredList[0] - filteredList[1]);
		
		if(filteredList.length<2){
			answer.push('there is no answer');
		}
		else if(absolute === x){
			answer.push(filteredList[0]);
			answer.push(filteredList[1]);
		}
		else{
			filteredList.splice(0,1);
			//console.log(filteredList);
			calculate();
		}
	}

	calculate();

	console.log('the answer is: ' + answer);

}

primeFinder(start, start2, start3);