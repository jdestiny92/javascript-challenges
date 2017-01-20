// First Factorial
// ----------------                                                                     
// Using the JavaScript language, have the function FirstFactorial(num) take the num   
// parameter being passed and return the factorial of it (ie. if num = 4,              
// return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

var start = process.argv[2];

function FirstFactorial(num){

	var container = [];
	var result;

	for(var i=1; i<=num; i++){
    	container.push(i);
	};

	for(var j=0; j<container.length; j++){
    	
    	if(j==0){
        	result = container[0];
    	}
    	else{
    	result = (result * container[j]);
    	}
	};

	console.log(num + '! is: ' + result);
}


FirstFactorial(start);