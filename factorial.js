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

	console.log(result);
}


FirstFactorial(start);