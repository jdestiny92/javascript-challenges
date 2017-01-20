// fibonaci calculator done recursively

// how to find nth value of the series?

// 0,1,1,2,3,5.....

var series = [0, 1];
var first = 0;
var second = 1;
var start = process.argv[2];

function calculate(){

	var summation = first + second;

	series.push(summation);

	second = series[series.length-1];
	first = series[series.length-2];

	if(series.length != start){
		calculate();
	}
	else{
		console.log('The answer is: ' + series[series.length-1]);
		return;
	}

}

console.log('n = ' + start);

if(start == 1){
	console.log('The answer is 0');
}
else if(start == 2){
	console.log('The answer is 1');
}
else{
	calculate();
}


